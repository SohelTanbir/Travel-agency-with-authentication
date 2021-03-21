import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGofore, } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig/firebase.config'
import { userContext } from '../../App'
import { Link } from 'react-router-dom';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [loggedUser, setLoggedUser] = useState({
        email:'',
        password:'',
    })
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    // login with Google
    const handleGoogleSignIn = () => {
        var GoogleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(GoogleProvider)
            .then((result) => {
                const { displayName, email } = result.user;
                const loggedUser = { name: displayName, email }
                setLoggedInUser(loggedUser)
                history.push(from)
            }).catch((error) => {
                var errorMessage = error.message;
            });
    }

    // SignIn with Facebook
    const handleFBSignIn = () => {
        var FbProvider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(FbProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const loggedUser = { name: displayName, email, photoURL }
                setLoggedInUser(loggedUser)
                history.push(from)
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }

    // login with email and password
const getEmailPasswordFromUser = (e)=>{
        let newInfo = {...loggedUser};
        newInfo[e.target.name] = e.target.value;
        setLoggedUser(newInfo);
}
const emailPasswordSignIn = (e) => {
    firebase.auth().signInWithEmailAndPassword(loggedUser.email, loggedUser.password)
    .then((userCredential) => {
        var user = userCredential.user;
         const { displayName, email, photoURL } =user;
            const loggedUser = { name: displayName, email, photoURL }
            setLoggedInUser(loggedUser)
            history.push(from)
    })
    .catch((error) => {
    var errorMessage = error.message;
    alert(errorMessage)
    });
    e.preventDefault()
}
    return (
        <div>
            <p>{loggedInUser.email ? 'Login Successful' : ''}</p>
            <div className="loginBox">
                <h4>Login</h4>
                <div className="inputBox">
                    <form onSubmit={emailPasswordSignIn}>
                        <input type="email" onBlur={getEmailPasswordFromUser} name="email" placeholder="Email" /> <br />
                        <input type="Password" onBlur={getEmailPasswordFromUser} name="password" placeholder="Password" />
                        <div className="additionalInfo">
                            <div className="checkbox">
                                <input type="checkbox" /><span>Remember me</span>
                            </div>
                            <div className="forgotPassword">
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                        <button>Login</button>
                        <small>Don't have Account? <Link to="/signUp">Create an Account</Link></small>
                    </form>
                </div>
            </div>
            <div className="socialLogin">
                <span className="orOption">or</span>
                <button className="btn btn-primary mt-3" onClick={handleFBSignIn}>
                    <FontAwesomeIcon icon={faFacebookF}
                        style={{ fontSize: '20px', marginRight: '20px' }} />
                         Continue with Facebook
                    </button>

                <button className="btn btn-success" onClick={handleGoogleSignIn}>
                    <FontAwesomeIcon icon={faGofore} style={{ fontSize: '20px', marginRight: '20px' }} />
                        Continue with Google
                    </button>
            </div>

        </div>
    );
};

export default Login;