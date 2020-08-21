import React from 'react';
import styled from 'styled-components';

const PageBtn = (props) => {

    const PageButton = styled.div`
        background: #0A1421;
        padding: .5rem;
        color: #f4f6fb;
        margin: .25rem .2rem;

        &:hover {
            cursor: pointer;
        }
    `

    const handleClick = e => {
        props.getCarsFunc(props.num)
    }

    return(
        <PageButton onClick={handleClick} >{props.num}</PageButton>
    )
}

export default PageBtn