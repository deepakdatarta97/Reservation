import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from './Navbar'

function AddStations({stations,setStation}) {

const navigate = useNavigate();

const [newStation,setNewStation] = useState();

function handleNewStation(e)
{
    setNewStation(e.target.value)
}

function handleSubmit(){
    if(newStation)
    {
        setStation([...stations, newStation])
        navigate("/dashboard")
    }
}
    return (
        <div className='signin'>
             <Navbar pageName="Add Station"/>
                <div>
                <label>
                   Write Station Name: 
                </label>
                    <input type="text" value={newStation} onChange={handleNewStation} placeholder='Enter station name'/>
                </div>
                <div>

                </div>
                <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default AddStations
