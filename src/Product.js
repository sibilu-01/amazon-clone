import React from 'react'
import "./Product.css"
import { useStateValue } from "./StateProvider"

function Product( {id, title, image, price, rating }) {

    const [ { basket }, dispatch ] = useStateValue();

    console.log("basket is >>>" , basket);
    const addToBasket = () => {
        //dispatch the item int to the data layer
        dispatch ({
            type: 'ADD TO BASKET',
            item : {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        })
    }
    return (
        <div className = "product">
            <div className = 'product-info'>
                <p> {title} </p>
                <p className = 'product-price'>
                    <small>$</small>
                    <strong> { price } </strong>
                </p>
                <div className = 'product-rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
            </div>
            <img src = {image} alt = ""/>
            <button onClick = {addToBasket}> Add to Basket</button>
            
        </div>
    )
}

export default Product
