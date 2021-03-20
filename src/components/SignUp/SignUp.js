import React, { useState } from 'react';
import './SIgnUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGofore, } from '@fortawesome/free-brands-svg-icons';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig/firebase.config'
import { Link } from 'react-router-dom';



if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}



const SignUp = () => {
    const [newUser, setNewUser] = useState({
        name:'',
        email:'',
        password:'',
    })
// create new user
const inputValue = (e)=>{
    let isFormValid;
    if(e.target.name === 'name'){

        isFormValid = e.target.value;
    }
    if(e.target.name === 'email'){
      const email = e.target.value;
        isFormValid =  /\S+@\S+\.\S+/.test(email);

    }
    if(e.target.name === 'password'){
      let password = e.target.value;
      if(password.length > 6){
        isFormValid = /\d{1}/.test(password);
      }

    }
    if(isFormValid){
      let newInfo = {...newUser};
      newInfo[e.target.name] = e.target.value;
      setNewUser(newInfo);

    }

    console.log(newUser)
}


const CreateNewUser = (e)=>{
    if(newUser.email && newUser.password){
        firebase.auth().createUserWithEmailAndPassword(newUser.email,newUser.password)
        .then((userCredential) => {
          var user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          var errorMessage = error.message;
          console.log(errorMessage)
        });
    }
   e.preventDefault()
}
    return (
        <div>
            <div className="signInBox">
                <h4>Sign Up</h4>
                <div className="inputBox">
                    <form onSubmit={CreateNewUser}>
                        <input type="text" onBlur={inputValue} name="name" placeholder="Name" /> <br />
                        <input type="email" onBlur={inputValue} name="email" placeholder="Email" /> <br />
                        <input type="Password" onBlur={inputValue} name="password" placeholder="Password" /><br/>
                        <input type="Password" onBlur={inputValue} name="ConfirmPassword" placeholder="Confirm Password" /><br/>
                        <div className="additionalInfo">
                            <div className="checkbox">
                                <input type="checkbox" /><span>Remember me</span>
                            </div>
                            <div className="forgotPassword">
                                <a href="#">Forgot Password</a>
                            </div>
                        </div>
                        <button>Login</button>
                        <small>Already have an Account? <Link to="/login">Login Now</Link></small>
                    </form>
                </div>
            </div>
            <div className="socialLogin">
                <span className="orOption">or</span>
                <button className="btn btn-primary mt-3">
                    <FontAwesomeIcon icon={faFacebookF}
                        style={{ fontSize: '20px', marginRight: '20px' }} />
                     Continue with Facebook
                </button>
                <button className="btn btn-success">
                    <FontAwesomeIcon icon={faGofore} style={{ fontSize: '20px', marginRight: '20px' }} />
                    Continue with Google
                </button>
            </div>
        </div>
    );
};

export default SignUp;