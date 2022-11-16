import "./landing-page-nav.scss";
// import { ReactComponent as Logo } from "../../assests/Gokolectlogo.svg";

const LandingPageNav = () => (
    <div className="nav-container">
        <div className="links">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Reach Us</li>
                <li>FAQs</li>
            </ul>
        </div>
        <div className="logo">
            {/* <Logo /> */}
        </div>
    </div>
);

export default LandingPageNav;