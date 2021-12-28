import React from 'react'
import { useState, useEffect } from 'react';
import Login from './Login';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'

function Signup({users, setUsers}) {

const navigate = useNavigate();

const [email, setEmail]= useState()
const [password, setPassword]= useState()

function handleEmail(e){
    setEmail(e.target.value)
}

function handlePassword(e){
    setPassword(e.target.value)
}

function handleSubmit(e){
    if(email && password)
    {
        let tempUsers = [...users];
        tempUsers.push(
            {
                    userId : uuidv4(),
                    email,
                    password
            }
        )
        setUsers([...tempUsers])
        navigate("/")
    }
}
    return (
        <div className='signin'>
             <Navbar pageName="SignUp" isSignUp={true} />
                <div>
                <label>
                    Email Address: 
                </label>
                    <input type="email" value={email} onChange={handleEmail} placeholder='Enter your email'/>
                    {/* <p className='error'>{handleError}</p> */}

                </div>
                <div>

                <label>
                    Password:
                </label>
                    <input type="password" value={password} onChange={handlePassword} placeholder='Enter your password'/>
                    {/* <p className='error'>{handleError}</p> */}

                </div>
                <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Signup
