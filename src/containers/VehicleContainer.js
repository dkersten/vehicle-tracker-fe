import React from 'react';
import styled, { css } from 'styled-components';
import CarCard from './CarCard';
import { useState } from 'react';
import { useEffect } from 'react';

const VehicleContainer = () => {

    const [cars, setCars] = useState([])
    const [darkTheme, setTheme] = useState(true)
    const [themeDropdown, setThemeDropdown] = useState('dark')

    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then(resp => resp.json())
            .then(cars => setCars(cars))
    }, [])

    const Background = styled.div`
        width: 100%;
        height: 100%;
        background: ${darkTheme ? '#1F2833' : '#F4F6FB'};

        form {
            max-width: 400px;
            background: ${darkTheme ? '#0A1421' : '#B8C9E8'};
            color: ${darkTheme ? '#F4F6FB' : '#1C1F4B'};
            margin-left: auto;
            margin-right: auto;
            padding: 1rem;
        }
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

    const handleThemeChange = e => {
        e.preventDefault()

        if (e.target.value === 'dark') {
            setTheme(true)
            setThemeDropdown('dark')
        } else if (e.target.value === 'light') {
            setTheme(false)
            setThemeDropdown('light')
        }
    }
    return(
        <Background>
            <form>
                <p>Choose Different Theme:</p>
                    {
                        darkTheme ?
                                <label>
                                    <input onChange={handleThemeChange} type="radio" value="light" />
                                    Light
                                </label>
                            :
                                <label>
                                    <input onChange={handleThemeChange} type="radio" value="dark" />
                                    Dark
                                </label>
                    }
            </form>
            <Container>
                {
                    cars.map(car => <CarCard 
                        id={car.id}
                        name={car.name}
                        manufacturer={car.manufacturer}
                        price={car.price}
                        vclass={car.vclass}
                        availability={car.availability}
                        darkTheme={darkTheme}
                    />)
                }
            </Container>
        </Background>
    )
}

export default VehicleContainer;