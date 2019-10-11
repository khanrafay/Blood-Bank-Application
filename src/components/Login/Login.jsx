import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isValidES3Identifier } from '@babel/types';
import { Redirect } from "react-router-dom";



const Login = () => {

    let [emailAddress, setEmailAddress] = useState("");
    let [password, setPassword] = useState("");
    
    var isUserValid = false;
    var showError = false;

    var inValidMessage = <label id="lblError">Invalid Credentials</label>;

    var x = JSON.parse(localStorage.getItem('user0'));
    console.log("this " + x.firstName);

    const onLogin = (e) => {
        e.preventDefault();
        console.log(e.target);
        var userEmailId = e.target[0].value;
        var userPassword = e.target[1].value;

        if (!(userEmailId == "" || userPassword == "")) {
            CheckingUserData(userEmailId, userPassword);
            showError = true;
            
         }

    }

    const CheckingUserData = (emailId, password) => {
        if (localStorage.getItem("userCount") != null) {
            var countUserId = localStorage.getItem("userCount");
        } else {
            var countUserId = 0;
        }

        for (var i = 0; i < countUserId; i++) {
            var user = JSON.parse(localStorage.getItem("user" + i));

            if (user.emailAddress == emailId && user.password == password) {
                isUserValid = true;
                sessionStorage.setItem("user", JSON.stringify(user));
                window.location.pathname = "/dashboard";
                break;

            }
        }
       

    }





    return (
        <React.Fragment>
            <br/>
            <form onSubmit={onLogin}>
                <div className='container'>
                    <h1>Log In</h1>
                    <p>Please enter the credentials to log in</p>
                    <hr />
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Email Address</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' value={emailAddress}
                                onChange={(e) => {
                                    setEmailAddress(e.target.value)
                                }} className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Password</label>
                        </div>
                        <div className='col-3'>
                            <input type='password' value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'></div>
                        <div className='col-3'>
                            <input type="submit" value="Login" className="btn btn-primary" />
                            
                            
                            <small className="form-text text-muted">Don't have an account? <Link to='/signup'>Sign Up </Link> now</small>
                           
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>

    );
}

export default Login;