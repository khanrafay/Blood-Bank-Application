import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Signup = (props) => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [emailAddress, setEmailAddress] = useState("");
    let [password, setPassword] = useState("");
    let [gender, setGender] = useState("");
    let [role, setRole] = useState("");
    let [bloodGroup, setBloodGroup] = useState("");


    const onSubmitChange = (e) => {
        e.preventDefault();

        if (localStorage.getItem("userCount") != null) {
            var countUserId = localStorage.getItem("userCount");
        } else {
            var countUserId = 0;
        }

        var firstName = e.target[0].value;
        var lastName = e.target[1].value;
        var emailAddress = e.target[2].value;
        var password = e.target[3].value;
        var gender = e.target[4].value;
        var role = e.target[5].value;
        var bloodGroup = e.target[6].value;

        var user = {
            userId: countUserId, firstName: firstName, lastName: lastName,
            "emailAddress": emailAddress, password: password, gender: gender,
            role: role, bloodGroup: bloodGroup
        }

        localStorage.setItem("user" + countUserId, JSON.stringify(user));
        countUserId++;
        localStorage.setItem("userCount", countUserId);
        window.location.pathname = "/dashboard";






    }

    return (
        <React.Fragment>

            <form onSubmit={onSubmitChange}>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>First Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' name='firstName' value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Last Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' name='lastName' value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Email Address</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' name='emailAddress' value={emailAddress} onChange={(e) => {
                                setEmailAddress(e.target.value)
                            }} className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Password</label>
                        </div>
                        <div className='col-3'>
                            <input type='password' name='password' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} className='form-control' required></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Gender</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control' name='gender' value={gender} onChange={(e) => {
                                console.log("logging" + e.target.value);
                                setGender(e.target.value)
                            }} >
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Role</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control' name='role' value={role} onChange={(e) => {
                                setRole(e.target.value)
                            }}>
                                <option value='donor'>Donor</option>
                                <option value='reciepient'>Recipient</option>
                            </select>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Blood Group</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control' name='bloodGroup' value={bloodGroup} onChange={(e) => {
                                setBloodGroup(e.target.value)
                            }}>
                                <option value='A'>A</option>
                                <option value='B'>B</option>
                                <option value='AB'>AB</option>
                                <option value='O'>O</option>

                            </select>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'></div>
                        <div className='col-3'>
                            <input type='submit' value='Submit' className="btn btn-primary" />
                            <small className="form-text text-muted">Already have a account? <Link to='/login'>Login </Link> now</small>

                        </div>
                    </div>
                </div>

            </form>

        </React.Fragment>
    );
}

export default Signup;