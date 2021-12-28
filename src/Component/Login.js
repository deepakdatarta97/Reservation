import React from 'react'
import { useState, useEffect } from 'react';
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";


function Login({users, setLoggedInUser} ) {

const navigate = useNavigate();

const [email, setEmail]= useState("")
const [password, setPassword]= useState("")

function handleEmail(e){
    setEmail(e.target.value)
}

function handlePassword(e){
    setPassword(e.target.value)
}

function handleSubmit(){
   if(email && password && users.find(user => user.email === email && user.password === password))
   {
    setLoggedInUser(users.find(user => user.email === email && user.password === password).userId)
    console.log(users.find(user => user.email === email && user.password === password).userId)
    navigate("/dashboard")
   }
   else{
       alert("Please enter right email and password")
   }
}

    return (
        <div className='signin'>
             <Navbar pageName="Login" canSignUp={true}/>
          <div className='main'>
        </div>
            <form className='signup'>
            
                <div>

                <label>
                    Email Address: 
                </label>
                    <input type="email" name="email" value={email} onChange={handleEmail} placeholder='Enter your email'/>
                </div>
                <div>

                <label>
                    Password:
                </label>
                    <input type="password" value={password} onChange={handlePassword} name="password" placeholder='Enter your password'/>
                </div>
            
                {/* <p>does not Have an account? <span onClick={Signup}>Register </span></p> */}
                <button type="submit" onClick={handleSubmit}>Login</button>
            </form>
        </div>
    
    )
}

export default Login;
