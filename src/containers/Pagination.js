import React from 'react';

const Pagination = (props) => {

    const generatePaginationBtns = () => {
        let pageBtns = []

        for (let i = 1; i < props.cars; i += 48) {
            pageBtns.push(<span>{i}</span>)
        }

        return pageBtns
    }
    console.log(props.cars)

    return(
        <div>
            {generatePaginationBtns()}
        </div>
    )
}

export default Pagination