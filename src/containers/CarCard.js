import React from 'react';
import styled, { css } from 'styled-components';

const CarCard = (props) => {

    const CardContainer = styled.div`
        margin: .75rem .5rem;
        background: red;
        padding: 1rem;
        flex-basis: calc(33% - 1rem);

        @media only screen and (max-width: 768px) {
            flex-basis: calc(50% - 1rem);
        }

        @media only screen and (max-width: 450px) {
            flex-basis: calc(100% - 1rem);
        }
    `
    
    return(
        <CardContainer>
            <h1>{props.name}</h1>
            <p>Manufacturer: {props.manufacturer}</p>
            <h2>Price: {props.price}</h2>
            <p>Availability: {props.availabilty}</p>
            <p>Vehicle Class: {props.vclass}</p>
        </CardContainer>
    )
}

export default CarCard