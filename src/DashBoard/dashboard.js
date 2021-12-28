import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar';
import { useNavigate } from "react-router-dom";

function Dashboard( {reservations, setReservations, loggedInUser, setLoggedInUser} ) {
    const navigate = useNavigate();
    const [filteredReservations, setFilteredReservations] = useState(loggedInUser === 1 ? reservations : reservations.filter(res => res.userId === loggedInUser));

    console.log("reservations --- all ", reservations)
    console.log("filteredReservations", filteredReservations)

    const handleDelete = (id) => {
        let tempReservations = filteredReservations.filter(res => res.id !== id);
        setReservations(tempReservations);
        console.log("reservations array", reservations);
        setFilteredReservations(reservations.filter(res => res.userId === loggedInUser))
      }

    const handleSearch = (e) => {
        let tempReservations = reservations.filter(res => res?.source?.toLowerCase().includes(e.target.value.toLowerCase()) || res?.destination?.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilteredReservations([...tempReservations])
    }

    useEffect(()=>{
        if(!loggedInUser)
        {
            navigate("/")
        }
    },[])

    useEffect(()=>{
        if(!loggedInUser)
        {
            navigate("/")
        }
      },[loggedInUser])

    return (
        <section id="dashboard">
        <Navbar pageName="Dashboard" setLoggedInUser={setLoggedInUser} isAdmin={loggedInUser === 1}/>

        LOGGED IN USER = {loggedInUser}
         {/* <div className='main'>
            <header className='container'>
                <h2>
                    Fake
                </h2>
                <h2 >
                    DashBoard
                </h2>
                <ul>
                    <li>
                        <a src="/Login.js"><button>Login</button></a>
                    </li>
                     <li>
                        <a href=""><button>logout</button></a>
                    </li>
                </ul>
            </header>
        </div>
        <div className='background'>
        <img src="" alt="" />
            
        </div>
        <div className='content'>
            <h1>DashBoard</h1>
        </div>
       

            <h2>previous journey</h2>
        <div className='previous'>
            <div className='prev'>
                <div className="prevcard">
                    <h3>1</h3>
                    <p>Date</p>
                    <h4>destination</h4>
                </div>
                <button className='delete'>delete</button>

            </div>
            <div className='prev'>
                <div className="prevcard">
                    <h3>1</h3>
                    <p>Date</p>
                    <h4>Price:150-/</h4>
                </div>
                <button className='delete'>delete</button>

            </div>
            <div className='prev'>
                <div className="prevcard">
                    <h3>1</h3>
                    <p>Date</p>
                    <h4>Price:150-/</h4>
                </div>
                <button className='delete'>delete</button>
            </div>
        </div>
        <div  className='maindelete' >

                  <button className='mdelete'>delete</button>
        </div>


         */}
      <div>
      {filteredReservations.length === 0 && <h2>There are no reservations for you, please go to journey page and plan your trip! Happy Booking :)</h2>}
        {filteredReservations.length > 0 && (<>
            <h2>My Reservations</h2>
            Filter with station names : <input onChange={handleSearch} />
                    </>)}

        {filteredReservations.length > 0 &&
          filteredReservations.map((res) => (
            <div className="res-list">
                <div>
                    <label>booking id</label>
                    <span>{res.id}</span>
                </div>
                <div>
                    <label>source</label>
                    <span>{res.source}</span>
                </div>
                <div>
                    <label>destination</label>
                    <span>{res.destination}</span>
                </div>
                <div>
                    <label>Date</label>
                    <span>{res.journeyDate}</span>
                </div>
                <div>
                    <button onClick={() => handleDelete(res.id)}>Delete</button>
                </div>
            </div>
          ))}
      </div>

        </section>
    )
}

export default Dashboard
