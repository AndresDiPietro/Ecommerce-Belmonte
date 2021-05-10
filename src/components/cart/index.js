import React, {useContext} from "react"
import { Link } from "react-router-dom"
import {CartContext} from '../../context/CartContext'

import CartItem from "../cartItem"
import './cart.css'

const Cart = () => {

    const {cart, removeItem, clear, calculatePrice} = useContext(CartContext)
    
    return(
        <section className="cart">

            {cart.map(e=> <CartItem className="cart-item" item={e.item} quantity={e.quantity} key={e.item.id} stock={e.item.stock} remove={removeItem}/>)}

            {cart.length!==0? 
            <div className="cart__total">
                <button className="cart__clear" onClick={clear}>
                    Vaciar carrito 
                </button>
                <span className='cart__total-price'>
                    Precio total: {calculatePrice()}
                </span>
                <Link to='/form' className="cart__finish">
                        Continuar compra
                </Link>
            </div>
                :
            <div className="cart__empty">
                Tu carrito está vacío
                <Link className="cart__empty-link" to='/'>
                        Ir por productos
                </Link>
            </div>}
        </section>
    )
}
export default Cart