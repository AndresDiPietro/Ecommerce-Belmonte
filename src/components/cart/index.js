import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'
import CartItem from "../cartItem";

const Cart = () => {
    const {cart, removeItem, clear} = useContext(CartContext)

    return(
        <section>
            {cart.map(e=> <CartItem item={e.item} cantidad={e.quantity} key={e.item.id} remove={removeItem}/>)}
            
            {cart.length!==0? <button onClick={clear}>Vaciar carrito </button>
                :
            <Link to='/'><button>Ir a productos</button></Link>}
        </section>
    )

}

export default Cart;