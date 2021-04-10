import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import CartItem from "../cartItem";

const Cart = () => {
    const {cart, removeItem, clear, calcularPrecio} = useContext(CartContext)
    let precioTotal = calcularPrecio()
    return(
        <section>
            {cart.map(e=> <CartItem item={e.item} cantidad={e.quantity} key={e.item.id} remove={removeItem}/>)}
            
            {cart.length!==0? 
            <div>TOTAL: {precioTotal}<button onClick={clear}>Vaciar carrito </button></div>
                :
            <div>Tu carrito está vacío<Link to='/'><button>Ir por productos</button></Link></div>}
        </section>
    )

}

export default Cart;