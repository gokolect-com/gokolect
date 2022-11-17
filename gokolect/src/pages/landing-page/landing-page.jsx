import "./landing-page.scss";
import LandingPageNav from "../../components/landing-page-nav/landing-page-nav";
import { ReactComponent as GooglePlay } from "../../assests/Googleplay.svg";
import { ReactComponent as AppleStore } from "../../assests/applestore.svg";
import { ReactComponent as WebApp } from "../../assests/webapp.svg";
import { ReactComponent as Background } from "../../assests/mobilemockup.svg"

const LandingPage = () => (
    <div className="container">
        <LandingPageNav />
        <Background id="background" />
        <div className="sub-container">
            <h1>People give what they no longer have need for</h1>
            <h3>give. receive. let love lead.</h3>
            <div className="external-links">
                <GooglePlay className="link" />
                <AppleStore className="link" />
                <WebApp className="link" />
            </div>
        </div>
    </div>
);

export default LandingPage;