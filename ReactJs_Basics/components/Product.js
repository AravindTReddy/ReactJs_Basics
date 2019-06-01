import React from "react"

function Product(props){
    return (
        <div>
            <h3 style={{display: props.name ? "block" : "none" }}>Name:{props.name}</h3>
            <img src={props.img} />
            <h4 style={{color: props.price ? "block" : "#888888" }}>Price:{props.price}$</h4>
            <p style={{display: props.description ? "block" : "none" }}>Description:{props.description}</p><hr />
        </div>
    )
}

export default Product