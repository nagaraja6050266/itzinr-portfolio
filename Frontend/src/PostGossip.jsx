import React from "react";
import { useNavigate } from "react-router-dom";

function PostGossip() {
    const navigate = useNavigate();
    let result;

    const storeGossip = async (e) => {
        e.preventDefault();
        const nickname = document.getElementById("nickname").value;
        const designation = document.getElementById("designation").value;
        const gossip = document.getElementById("gossip").value;

        try {
            result = await fetch("http://localhost:5002/gossip", {
                method: "post",
                body: JSON.stringify({ nickname, designation, gossip }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.log("Error while fetching");
        }
        if (result) {
            alert("Data stored");
            document.getElementById("form").reset();
            navigate("/thank-you");
        }
    };

    return (
        <section className="comment-writing">
            <h1 className="section-header">Review</h1>
            <div className="gossip-container">
                <form
                    id="form"
                    onSubmit={storeGossip}
                    className="nickname-container"
                >
                    <label htmlFor="nickname">Enter your name</label>
                    <input name="nickname" type="text" id="nickname" required />
                    <label htmlFor="designation">Designation</label>
                    <input
                        type="text"
                        name="designation"
                        id="designation"
                        required
                    />
                    <label htmlFor="gossip">
                        Write a review about Nagaraja on his skills, abilities
                        and character. Your review will be displayed in his
                        Portfolio
                    </label>
                    <textarea
                        name="gossip"
                        id="gossip"
                        cols="30"
                        rows="10"
                        required
                    ></textarea>

                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </section>
    );
}

export default PostGossip;
