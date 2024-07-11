function CommentsCard(props) {
    return (
        <div className="comments-card">
            <h3>{props.name}</h3>
            <h5>{props.designation}</h5>
            <div className="comment">
                <p>{props.comment}</p>
            </div>
        </div>
    );
}
export default CommentsCard;
