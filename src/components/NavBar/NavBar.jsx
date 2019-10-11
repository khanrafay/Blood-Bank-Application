import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import '../NavBar/NavBar.css';

const NavigationBar = () => {
 
   
  var user = sessionStorage.getItem("user");
    console.log(user);

    var isLoggedIn = false;
    var signupLink = <Link to='/signup' className='m-3 loginLinks'>Sign Up</Link>;
    var loginLink = <Link to='/login' className='m-3 loginLinks'>Log In</Link>;
    var arrLinks = [signupLink,loginLink];
    var logoutLink =  <Link to='/home' onClick={()=>{
      sessionStorage.clear();
      window.location.pathname = '/login';
    }} >Logout</Link>;
  
    if(user != null)
           isLoggedIn = true;
  
  return (
    
    <React.Fragment>
   
      <nav className="navbar navbar-expand-lg navbar-light bg-grey">
        <img id="logo" src={logo} />
        <Link to='/' className="navbar-brand" href="#">Donate Blood</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className='nav-link'>About Us</Link>
            </li>
            <li className="nav-item">
              <Link to='/contact' className='nav-link'>Contact Us</Link>
            </li>
          </ul>
          <div className="form-inline my-2 my-lg-0">
           {isLoggedIn ? logoutLink : arrLinks }
          </div>
        </div>
      </nav>
    </React.Fragment>
  );

}

export default NavigationBar;