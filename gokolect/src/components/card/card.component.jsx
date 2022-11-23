import "./card.styles.scss";
import { ReactComponent as GiveHeart } from "../../assests/give_heart.svg";

const Card = ({name, description, imageUrl}) => (
    <div className="card-container">
        <div className="image">
            <img src={imageUrl} alt="chair" />
        </div>
        <div className="descriptions">
            <h4>{name}</h4>
            <span>{description}</span>
        </div>
        <div className="entries">
            <span>29 entries</span>
            <div>
                <span>200</span>
                <GiveHeart className="heart"/>
            </div>
        </div>
    </div>
);

export default Card;