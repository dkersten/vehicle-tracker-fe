import React from 'react';
import styled, { css } from 'styled-components';

const CarCard = (props) => {

    const CardContainer = styled.div`
        margin: .75rem .5rem;
        background: #0a1421;
        flex-basis: calc(33% - 1rem);
        border-radius: 5px;

        @media only screen and (max-width: 768px) {
            flex-basis: calc(50% - 1rem);
        }

        @media only screen and (max-width: 450px) {
            flex-basis: calc(100% - 1rem);
        }

        img {
            overflow: hidden;
            border-radius: 5px 5px 0 0;
        }

        .info-container {
            padding: 1rem;
        }

        h1 {
            color: #66FCF1;
            font-size: 1.25rem;
            margin-top: 0;

            span {
                color: #45A29E
            }
        }

        h2 {
            color: #45A29E;
        }

        img {
            max-width: 100%;
        }
    `

    return(
        <CardContainer>
            <img src="https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_960_720.jpg" alt="image coming soon" />
            <div className="info-container">
                <h1><span>{props.manufacturer}</span> {props.name}</h1>
                <h2>Price: {props.price}</h2>
                <p>Availability: {props.availability}</p>
                <p>Vehicle Class: {props.vclass}</p>
            </div>
        </CardContainer>
    )
}

export default CarCard