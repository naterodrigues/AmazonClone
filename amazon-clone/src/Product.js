import React from 'react'
import './Product.css';

function Product({id,title,image,price,rating}) {
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
               <small>$</small>
                <strong>{price}</strong>
            
            </p>
            <div className="product__rating">
                {
                    Array(rating)  // Creates a rating array
                    .fill() // Fills the array with empty values
                    .map((_)=> (  // Maps the array with as many values as the number
                        <p>🌟</p>
                    ))}
            </div>
     
            </div>
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>
    )
}

export default Product
