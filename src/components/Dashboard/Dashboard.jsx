import React, { Component } from 'react';


const Dashboard = () => {

    var user = JSON.parse(sessionStorage.getItem("user"));
    var userName = user.firstName + " " + user.lastName;


    return ( <h1>Hi Welcome {userName} </h1> );
}
 
export default Dashboard;