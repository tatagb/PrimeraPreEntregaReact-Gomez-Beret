import React from 'react'
import cart from "../assets/cart.png"

const CartWidget = () => {
  return (
    <div id = "CartWidget">
        <img src={cart} alt="Carrito" />
    <span id="NumeroContador">10</span>
    </div>
  )
}

export default CartWidget