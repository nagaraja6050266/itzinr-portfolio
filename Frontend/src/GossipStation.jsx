import { useNavigate } from "react-router-dom";
function GossipStation() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/#comments");
    };

    return (
        <section className="thanks-section">
            <div className="thanks-page">
                <div className="thanks-inner">
                    <h3>Thanks for your review</h3>
                    <button onClick={handleClick}>Preview</button>
                </div>
            </div>
        </section>
    );
}

export default GossipStation;
