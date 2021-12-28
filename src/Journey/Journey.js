import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";
import Navbar from '../Component/Navbar'

function Journey( {stations, reservations, setReservations, loggedInUser, setLoggedInUser} ) {
  const [source, setSource] = useState();
  const [destination, setDestination] = useState();
  const [journeyDate, setJourneyDate] = useState();
  const [departureStation, setDepartureStations] = useState(stations);
  const [arrivalStation, setArrivalStations] = useState(stations);
  const navigate = useNavigate();


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

  function handleSource(e) {
    // let tempStations = stations.filter(station => station !== e.target.value)
    // setDepartureStations([...tempStations])
    setSource(e.target.value);
  }
  function handleDestination(e) {
    // let tempStations = stations.filter(station => station !== e.target.value)
    // setArrivalStations([...tempStations])
    setDestination(e.target.value);
  }
  function handleDate(e) {
    setJourneyDate(e.target.value);
  }

  function handleSubmit() {
    if(source && destination && journeyDate)
    {
      let tempReservations = [...reservations];
      tempReservations.push({
        userId:loggedInUser,
        id: uuidv4(),
        source,
        destination,
        journeyDate,
      });
      setReservations(tempReservations);
      console.log("reservations array", reservations);
      navigate("/dashboard");
    }
  }
  
  return (
    <section id="dashboard">
      <Navbar pageName="Journey" setLoggedInUser={setLoggedInUser}/>
      <div className="search">
        <div className="container">
          <label htmlFor="">Departure</label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={handleSource}
          >
            <option>Select Departure Station</option>
            {departureStation.map((station) => (
              <option>{station}</option>
            ))}
          </Input>
        </div>
        <div className="container">
          <label htmlFor="">Arrival</label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            onChange={handleDestination}
          >
            <option>Select Arrival Station</option>
            {arrivalStation.map((station) => (
              <option>{station}</option>
            ))}
          </Input>
        </div>
        <div className="container">
          <label htmlFor="">Journey Date</label>
          <Input type="date" onChange={handleDate} />
        </div>
      </div>
      <div className="check">
        <button onClick={handleSubmit}>Check out</button>
      </div>
    </section>
  );
}

export default Journey;
