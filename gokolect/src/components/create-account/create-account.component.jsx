import "./create-account.styles.scss";
import { ReactComponent as GokolectLogo } from "../../assests/Gokolectstandalonelogo.svg";
import { ReactComponent as GmailLogo } from "../../assests/gmaillogo.svg";
import { ReactComponent as FacebookLogo } from "../../assests/facebooklogo.svg";

const CreateAccount = () => (
    <div className="">
        <form>
        <div className="logo-section">
            <GokolectLogo className="gokolect"/>
            <h1>Create Account</h1>
            <span>Give and receive free gifts aswell</span>
            <div>
                <GmailLogo />
                <FacebookLogo />
            </div>
            <span>or use your email for registration</span>
        </div>
        <div className="sign-up-inputs">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
        </div>
        <div className="submit-section">
            <input type="checkbox" />
            <span>I agree to the Terms and Privacy Policy</span>
            <div>
                <input type="submit" value="Sign Up"/>
                <input type="submit" value="Sign In" />
            </div>
        </div>
        </form>
    </div>
);

export default CreateAccount;