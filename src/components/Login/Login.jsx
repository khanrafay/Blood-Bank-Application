import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <React.Fragment>
            <form>
                <div className='container'>
                    <h1>Log In</h1>
                    <p>Please enter the credentials to log in</p>
                    <hr/>
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
                        <div className='col-3'></div>
                        <div className='col-3'>
                            <Link to='/login'>
                            <button className="btn btn-primary" >Login</button>
                            </Link>
                            <small className="form-text text-muted">Don't have an account? <Link to='/signup'>Sign Up </Link> now</small>
  
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>

    );
}

export default Login;