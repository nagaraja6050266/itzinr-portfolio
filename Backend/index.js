const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Middlewares
app.use(express.json());
app.use(
    cors({
        origin: ["https://itzinr.vercel.app"],
        methods: ["POST", "GET"],
        allowedHeaders: ["Content-Type"],
        credentials: true,
    })
);

// MongoDB Connection
mongoose
    .connect(
        "mongodb+srv://nagaraja6050266:Inr6050266@cluster0.qwxcxia.mongodb.net/",
        {
            dbName: "Portfolio-Comments",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((error) => {
        console.error("DB Connection Error: ", error);
    });

// Gossip Schema and Model
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

// Error Handling Function
const handleError = (err, res) => {
    console.error("Error: ", err);
    res.status(500).json({ error: "Internal Server Error" });
};

// Routes
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
        console.error("Error while retrieving: ", error);
        handleError(error, res);
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
        console.error("Error occurred while saving: ", error);
        handleError(error, res);
    }
});

module.exports = app;
module.exports.handler = (req, res) => {
    app(req, res);
};
