import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Signup from '../Signup/Signup';
import Login from '../Login/Login';
import Home from '../StaticPages/Home';
import About from '../StaticPages/About';
import Contact from '../StaticPages/Contact';
import NavigationBar from '../NavBar/NavBar';

const AppLink = () => {
    return (
        <Router>
            <React.Fragment>
                <NavigationBar />
                <br />
                <Route exact path='/' component={Home}></Route>
                <Route path='/about' component={About}></Route>
                <Route path='/contact' component={Contact}></Route>
                <Route path='/signup' component={Signup}></Route>
                <Route path='/login' component={Login}></Route>
            </React.Fragment>
        </Router>
    );
}

export default AppLink
