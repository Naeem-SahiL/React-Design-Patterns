import React from 'react'

function ProductInfo({ product }) {
    const { name, price, description, rating } = product || {};

    return product ? (
        <>
            <h3>Name: {name}</h3>
            <h4>Description</h4>
            <p>{description}</p>
            <h3>Price: {price}</h3>
            <h3>Rating: {rating}</h3>
        </>
    ) : <h3>Loading...</h3>
}

export default ProductInfo;