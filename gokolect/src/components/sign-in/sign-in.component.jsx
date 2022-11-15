import "./sign-in.styles.css";

const SignIn = () => (
    <form className="sign-in-form">
        <div className="sign-in-container">
            {/* Social media sign in */}
            <div className="social-sign-in">
                <h1>Sign In</h1>
                <span>Give free gifts aswell</span>
                <div>

                </div>
            </div>

            {/* Sign in with email and password */}
            <div className="email-password-sign-in">
                <span>Or sign in with e-mail / username and password</span>
                <input type='text' placeholder="E-mail or Username"/>
                <input type='password' placeholder="Password"/>
            </div>
            
            {/* Sign in buttons */}
            <div className="sign-in-buttons">
                <div>
                    <input type="checkbox"/>
                    <span>Remember me</span>
                </div>

                <div>
                    <input type="submit" value="Login"/>
                    <span>Forgot password?</span>
                </div>
            </div>
        </div>
    </form>
)

export default SignIn;