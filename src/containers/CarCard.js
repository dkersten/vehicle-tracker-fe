import React from 'react';
import styled, { css } from 'styled-components';

const CarCard = () => {

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
        <CardContainer>Car</CardContainer>
    )
}

export default CarCard