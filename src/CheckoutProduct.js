import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from "./StateProvider"


function CheckoutProduct({id, image, title, price, rating, hideButton}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch ( {
            type: 'REMOVE FROM BASKET',
            id:id
        })
    }
    
    return (
        <div className = 'checkoutProduct'>
            <img className = 'checkoutProduct-image' src = {image}/>

            <div className = 'checkoutProduct-info'>
                <p className = 'checkoutProduct-title'> {title}
                </p>
                <p className = "checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className = 'checkoutProduct-rating'>
                    {Array(rating)
                    .fill().map((_,i) => (
                        <p>⭐️</p>
                    ))}
                </div>
                {!hideButton && (
                    <button onClick = {removeFromBasket}>Remove From Basket</button>  
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct
