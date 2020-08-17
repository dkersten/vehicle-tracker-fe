import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import { useState } from 'react';
import VehicleContainer from './containers/VehicleContainer.js';

const App = () => {

  const [carName, setCarName] = useState('')
  const [carManufacturer, setCarManufacturer] = useState('')
  const [carPrice, setCarPrice] = useState('')
  const [carClass, setCarClass] = useState('')
  const [carAvailability, setCarAvailability] = useState('')

  const handleNameChange = e => {
    setCarName(e.target.value)
  }

  const handleManufacturerChange = e => {
    setCarManufacturer(e.target.value)
  }

  const handlePriceChange = e => {
    setCarPrice(e.target.value)
  }

  const handleClassChange = e => {
    setCarClass(e.target.value)
  }

  const handleAvailabilityChange = e => {
    setCarAvailability(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    console.log("submitting")

    fetch('http://localhost:3000/vehicles', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: carName,
        manufacturer: carManufacturer,
        price: carPrice,
        vclass: carClass,
        availability: carAvailability
      })
    })
      .then(resp => resp.json())
      .then(() => {
        setCarName('')
        setCarManufacturer('')
        setCarPrice('')
        setCarClass('')
        setCarAvailability('')
      })
  }

  return (
    <div>
      {/* <div className="App">
        <form style={{"marginTop": "3rem"}}>
          <div>
            <label style={{"paddingRight": "10px"}} htmlFor="setCarName">Name</label>
            <input type="text" name="setCarName" value={carName} onChange={handleNameChange} />
          </div>
          <div>
            <label style={{"paddingRight": "10px"}} htmlFor="setCarManufacturer">Manufacturer</label>
            <input type="text" name="setCarManufacturer" value={carManufacturer} onChange={handleManufacturerChange} />
          </div>

          <div>
            <label style={{"paddingRight": "10px"}} htmlFor="setCarPrice">Price</label>
            <input type="text" name="setCarPrice" value={carPrice} onChange={handlePriceChange} />
          </div>

          <div>
            <label style={{"paddingRight": "10px"}} htmlFor="setCarClass">Class</label>
            <select name="setCarClass" id="carClass" onChange={handleClassChange}>
            <option value="">Choose Class</option>
              <option value="super">Super</option>
              <option value="boat">Boat</option>
              <option value="commercial">Commercial</option>
              <option value="compact">Compact</option>
              <option value="coupe">Coupe</option>
              <option value="cycle">Cycle</option>
              <option value="emergency">Emergency</option>
              <option value="helicopter">Helicopter</option>
              <option value="industrial">Industrial</option>
              <option value="military">Military</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="muscle">Muscle</option>
              <option value="off road">Off Road</option>
              <option value="open wheel">Open Wheel</option>
              <option value="plane">Plane</option>
              <option value="sedan">Sedan</option>
              <option value="service">Service</option>
              <option value="sport">Sport</option>
              <option value="sports classic">Sports Classic</option>
              <option value="suv">SUV</option>
              <option value="utility">Utility</option>
              <option value="van">Van</option>
            </select>
          </div>

          <div>
            <label style={{"paddingRight": "10px"}} htmlFor="setCarAvailability">Availability</label>
            <select name="setCarAvailability" id="availability" onChange={handleAvailabilityChange}>
            <option value="">Select Option</option>
              <option value="Legendary Motorsport">Legendary Motorsport</option>
              <option value="Southern S.A. Super Autos">Southern S.A. Super Autos</option>
              <option value="Warstock Cache & Carry">Warstock Cache & Carry</option>
              <option value="Benny's Original Motor Works">Benny's Original Motor Works</option>
              <option value="Elitás Travel">Elitás Travel</option>
              <option value="DockTease">DockTease</option>
              <option value="ArenaWar.tv">ArenaWar.tv</option>
              <option value="Pedal and Metal Cycles">Pedal and Metal Cycles</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <input type="submit" onClick={handleSubmit}/>
          </div>
          
        </form>
        <NavLink style={{color: "white"}} to="/vehicles">Vehicles</NavLink>
      </div> */}
      <Switch>
      <Route path="/vehicles" render={() => <VehicleContainer />} />
    </Switch>
    </div>
    
  );
}

export default App;
