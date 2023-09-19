import React from "react";



const Cart = (props) =>{
    const classes = 'Cart'
    return <div className={`${classes} ${props.className}`} >{props.children}</div>
}

export default Cart;