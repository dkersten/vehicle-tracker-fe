import React from 'react';
import PageBtn from './PageBtn';
import styled from 'styled-components';

const Pagination = (props) => {

    const PaginationContainer = styled.div`
        max-width: 400px;
        width: 98%;
        margin: 1rem auto 0;
        padding-bottom: 1rem;
        display: flex;
        justify-content: center;
    `

    const generatePaginationBtns = () => {
        let pageBtns = []
        let pageNumbers = props.cars / 48
        pageNumbers = Math.ceil(pageNumbers)

        for (let i = 1; i <= pageNumbers; i++) {
            
            pageBtns.push(<PageBtn key={i} num={i} getCarsFunc={props.getCarsFunc} />)
        }

        return pageBtns
    }
    console.log(props.cars)

    return(
        <PaginationContainer>
            {generatePaginationBtns()}
        </PaginationContainer>
    )
}

export default Pagination