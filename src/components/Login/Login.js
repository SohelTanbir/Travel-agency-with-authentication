import React from 'react';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGofore, } from '@fortawesome/free-brands-svg-icons';
import { Google } from 'react-bootstrap-icons';

const Login = () => {
    return (
        <div>
            <div className="loginBox">
                <h4>Login</h4>
                <div className="inputBox">
                    <form action="">
                        <input type="email" name="email" placeholder="Email" /> <br />
                        <input type="Password" name="password" placeholder="Password" />
                        <div className="additionalInfo">
                            <div className="checkbox">
                                <input type="checkbox" /><span>Remember me</span>
                            </div>
                            <div className="forgotPassword">
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                        <button>Login</button>
                        <small>Don't have Account? <a href="#">Create an Account</a></small>
                    </form>
                </div>
            </div>
            <div className="socialLogin">
                    <span className="orOption">or</span>
                    <button className="btn btn-primary mt-3">
                         <FontAwesomeIcon icon={faFacebookF} 
                         style={{fontSize:'20px', marginRight:'20px'}} /> 
                         Continue with Facebook
                    </button>

                    <button className="btn btn-success">
                        <FontAwesomeIcon icon={faGofore} style={{fontSize:'20px',marginRight:'20px'}} />
                        Continue with Google
                    </button>
               </div>
            
        </div>
    );
};

export default Login;