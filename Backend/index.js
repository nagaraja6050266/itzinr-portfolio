const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//Middlewares
app.use(express.json());
app.use(
    cors({
        origin: ["https://itzinr.vercel.app/"],
        methods: ["POST", "GET"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    })
);

const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require("mongoose");
mongoose
    .connect(MONGODB_URI, {
        dbName: "Portfolio-Comments",
    })
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Not Connected ");
    });

const GossipSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    gossip: {
        type: String,
        required: true,
    },
});

const Gossip = mongoose.model("Comments", GossipSchema);
Gossip.createIndexes();

const handleError = (err, res) => {
    res.status(500).json({ error: "Internal Server Error" });
};

app.get("/", async (req, res) => {
    try {
        res.send("App is working");
        console.log("App working");
    } catch (err) {
        handleError(err, res);
    }
});

app.get("/comments", async (req, res) => {
    try {
        const gossip = await Gossip.find({});
        console.log(gossip);
        res.json(gossip);
    } catch (error) {
        console.log("Error while retrieving");
    }
});

app.post("/gossip", async (req, res) => {
    try {
        console.log(req.body);
        const gossip = new Gossip(req.body);
        let result = await gossip.save();
        console.log("Successfully stored");
        res.send("Success");
    } catch (error) {
        console.log("Error occured while saving");
    }
});

console.log("After listening");

const PORT = process.env.PORT || 5000;
app.listen(PORT);