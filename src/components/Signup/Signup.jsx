import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';



const Signup = () => {
          
    const SignupUser = () => {
        console.log("User has been registered");
    }
  
    return (
        <React.Fragment>
            
            <div>
                <div className='container'>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>First Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Last Name</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Email Address</label>
                        </div>
                        <div className='col-3'>
                            <input type='text' className='form-control'></input>
                        </div>
                    </div>
                    <div className='row form-group'>
                        <div className='col-3'>
                            <label>Password</label>
                        </div>
                        <div className='col-3'>
                            <input type='password' className='form-control'></input>
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
                            <label>Role</label>
                        </div>
                        <div className='col-3'>
                            <select className='form-control'>
                                <option>Donor</option>
                                <option>Recipient</option>
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
                        </div>   
                        <div className='col-3'>
                            
                            <button className="btn btn-primary" onClick={SignupUser} >Sign up</button>
                           
                            <small className="form-text text-muted">Already have a account? <Link to='/login'>Login </Link> now</small>
  
                        </div>
                    </div>
                </div>

            </div>

        </React.Fragment>
    );
}

export default Signup;