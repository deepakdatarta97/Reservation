
import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Login from './Component/Login'
import AddStations from './Component/AddStation';
import Signup from './Component/Signup';
import SignupForm from './Form/SignupForm';
import Dashboard from './DashBoard/dashboard';
import Journey from './Journey/Journey';
import { v4 as uuidv4 } from 'uuid';
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import { Route, Routes } from "react-router-dom";

function App() {
  const [stations,setStation] = useState(["Delhi", "Bombay", "Bangalore", "indore"]);

  const [loggedInUser, setLoggedInUser] = useState();
  const [users, setUsers] = useState([ {
    userId : 1,
    email : "admin@fake.com",
    password : "admin"
  },
  {
    userId : 2,
    email : "sid@gmail.com",
    password : "abc"
  },
  {
    userId : 3,
    email : "deep@gmail.com",
    password : "abc"
  }])

  const [reservations, setReservations] = useState([ {
                              source : "abc2",
                              destination : "xyz2",
                              id:"ifvdjsdf",
                              journeyDate:"someRandomDate",
                              userId:2
                            },
                            {
                              source : "abc3",
                              destination : "xyz3",
                              id:"idegikjhl",
                              journeyDate:"someRandomDate",
                              userId:3
                            }]);

  console.log("Users", users)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login users={users} setLoggedInUser={setLoggedInUser} /> } />
        <Route path="/dashboard" element={<Dashboard setReservations={setReservations} reservations={reservations} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/journey" element={<Journey stations={stations} setReservations={setReservations} reservations={reservations} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/addStation" element={<AddStations stations={stations} setStation={setStation} /> } />
        <Route path="/signup" element={<Signup users={users}  setUsers={setUsers}/>} loggedInUser={loggedInUser}/>
      </Routes>
    </div>
  );
}

export default App;