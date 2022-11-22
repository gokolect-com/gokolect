import "./navigations.styles.scss";
import { ReactComponent as MessagesIcon } from "../../assests/Messages_icon.svg";
import { ReactComponent as FeedsIcon } from "../../assests/Feed_icon.svg";
import { ReactComponent as GokolectIcon } from "../../assests/Gokolectround.svg";
import { ReactComponent as CollectionsIcon } from "../../assests/Collections_icon.svg";
import { ReactComponent as AccountIcon } from "../../assests/Account_icon.svg";

const Navigation = () => (
    <div className="nav-container">
        <div>
            <MessagesIcon />
            <span>Messages</span>
        </div>
        <div>
            <FeedsIcon />
            <span>Feeds</span>
        </div>
        <div>
            <GokolectIcon />
        </div>
        <div>
            <CollectionsIcon />
            <span>Collections</span>
        </div>
        <div>
            <AccountIcon />
            <span>Account</span>
        </div>
    </div>
);

export default Navigation;