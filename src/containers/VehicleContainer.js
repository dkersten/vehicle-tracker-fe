import React from 'react';
import styled, { css } from 'styled-components';
import CarCard from './CarCard';
import { useState } from 'react';
import { useEffect } from 'react';

const VehicleContainer = () => {

    const [cars, setCars] = useState([])
    const [darkTheme, setTheme] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then(resp => resp.json())
            .then(cars => setCars(cars))
    }, [])

    console.log(cars[0])

    const Background = styled.div`
        width: 100%;
        height: 100%;
        background: ${darkTheme ? '#1F2833' : '#F4F6FB'}
    `

    const Container = styled.main`
        margin: 0 auto;
        padding: 2rem 0;
        max-width: 968px;
        color: white;
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    `
    return(
        <Background>
            <Container>
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
            </Container>
        </Background>
    )
}

export default VehicleContainer;