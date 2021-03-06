import React from 'react';
import styled from 'styled-components';

const CarCard = (props) => {

    const CardContainer = styled.div`
        margin: .75rem .5rem;
        background: ${props.darkTheme ? '#0a1421' : '#b8c9e8'};
        flex-basis: calc(33% - 1rem);
        border-radius: 5px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
        0 6.7px 5.3px rgba(0, 0, 0, 0.048),
        0 12.5px 10px rgba(0, 0, 0, 0.06),
        0 22.3px 17.9px rgba(0, 0, 0, 0.072),
        0 41.8px 33.4px rgba(0, 0, 0, 0.086);

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

        span {
            color: ${props.darkTheme ? '#66FCF1' : '#062ff1'}
        }

        h1 {
            color: ${props.darkTheme ? '#45A29E' : '#1C1F4B'};
            font-size: 1.25rem;
            margin-top: 0;
        }

        h2 {
            color: ${props.darkTheme ? '#45A29E' : '#1C1F4B'};
            font-size: 1.1rem;
        }

        img {
            max-width: 100%;
        }

        p {
            color: ${props.darkTheme ? '#45A29E' : '#1C1F4B'};
            line-height: 1.4;
            margin: 0;
        }
    `
    const sanitizePrice = () => {
        if (props.price !== "-") {
            if (props.price.includes(",")) {
                const updatedPrice = props.price.replace(",", "")
                return parseInt(updatedPrice).toLocaleString()
            } else {
                return parseInt(props.price).toLocaleString()
            }
        } else {
            return props.price
        }
    }

    return(
        <CardContainer>
            <img className="vehicle-img" src="https://cdn.pixabay.com/photo/2017/08/04/05/37/coming-soon-2579123_960_720.jpg" alt="vehicle image coming soon" />
            <div className="info-container">
                <h1>{props.manufacturer} <span>{props.name}</span></h1>
                <h2>Price: <span>${sanitizePrice()}</span></h2>
                <p>Availability: <span>{props.availability}</span></p>
                <p>Vehicle Class: <span>{props.vclass}</span></p>
            </div>
        </CardContainer>
    )
}

export default CarCard