import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return ( 
   
    <React.Fragment>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src='./src/Images/blood-drop.png'></img>Donate Blood</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='/home' className='nav-link'>Home</Link>
      </li>
      <li className="nav-item">
      <Link to='/about' className='nav-link'>About Us</Link>
      </li>
      <li className="nav-item">
      <Link to='/contact' className='nav-link'>Contact Us</Link>
      </li>
    </ul>
    <div className="form-inline my-2 my-lg-0">
     <Link to='/'>Sign Up</Link>
     <Link to='/login'>Log In</Link>
    </div>
  </div>
</nav>
    </React.Fragment>
    );

}
 
export default NavigationBar;