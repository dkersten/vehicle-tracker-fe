import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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

    setCarName('')
    setCarManufacturer('')
    setCarPrice('')
    setCarClass('')
    setCarAvailability('')
  }
  
  console.log(carName, carManufacturer, carPrice, carClass, carAvailability)

  return (
    <div className="App">
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
          <input type="text" name="setCarClass" value={carClass} onChange={handleClassChange} />
        </div>

        <div>
          <label style={{"paddingRight": "10px"}} htmlFor="setCarAvailability">Availability</label>
          <input type="text" name="setCarAvailability" value={carAvailability} onChange={handleAvailabilityChange} />
        </div>

        <div>
          <input type="submit" onClick={handleSubmit}/>
        </div>
        
      </form>
    </div>
  );
}

export default App;
