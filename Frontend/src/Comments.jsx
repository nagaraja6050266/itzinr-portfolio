import CommentsCard from "./CommentCard";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Comments() {
    const navigate = useNavigate();
    const [comments, setComments] = useState([{ name: "Name" }]);
    const getComments = async () => {
        try {
            const result = await fetch("http://localhost:5002/comments", {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await result.json();
            setComments(data);
        } catch (error) {
            console.log("Error while fetching");
        }
    };

    useEffect(() => {
        getComments();
    }, []);

    const routeToReview = () => {
        navigate("/comment");
    };

    return (
        <section id="comments">
            <h1 className="section-header">Comments and Reviews</h1>
            <div className="comments-container">
                {comments.map((c, i) => (
                    <CommentsCard
                        key={i}
                        name={c.nickname}
                        designation={c.designation}
                        comment={c.gossip}
                    />
                ))}
            </div>
            <div className="write-review-div"><button onClick={routeToReview}>Write your review</button></div>
            
        </section>
    );
}

export default Comments;
