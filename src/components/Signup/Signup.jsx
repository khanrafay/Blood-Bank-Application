import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



const Signup = () => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [emailAddress, setEmailAddress] = useState("");
    let [password, setPassword] = useState("");


    return (
        <React.Fragment>

            <form>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>First Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Last Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' value={lastName} onChange={(e) => {
                                setLastName(e.target.value)
                            }} className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Email Address</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' value={emailAddress} onChange={(e) => {
                                setEmailAddress(e.target.value)
                            }}  className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Password</label>
                        </div>
                        <div className='col-3'>
                            <input type='password' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }}  className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Gender</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control'>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Blood Group</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control'>
                                <option>A</option>
                                <option>B</option>
                                <option>AB</option>
                                <option>O</option>

                            </select>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <Link to='/login'>
                                <button className="btn btn-primary" >Sign up</button>
                            </Link>
                            <small className="form-text text-muted">Already have a account? <Link to='/login'>Login </Link> now</small>

                        </div>
                    </div>
                </div>

            </form>

        </React.Fragment>
    );
}

export default Signup;