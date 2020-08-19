import React from 'react';
import styled, { css } from 'styled-components';
import CarCard from './CarCard';
import { useState } from 'react';
import { useEffect } from 'react';

const VehicleContainer = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then(resp => resp.json())
            .then(cars => setCars(cars))
    }, [])

    console.log(cars[0])

    const Conatianer = styled.main`
        margin: 2rem auto;
        max-width: 968px;
        color: white;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `
    return(
        <Conatianer>
            {
                cars.map(car => <CarCard 
                    id={car.id}
                    name={car.name}
                    manufacturer={car.manufacturer}
                    price={car.price}
                    vclass={car.vclass}
                    availability={car.availability}
                />)
            }
        </Conatianer>
    )
}

export default VehicleContainer;