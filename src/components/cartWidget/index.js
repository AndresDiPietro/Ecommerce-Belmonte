import React, {useContext, useEffect, useState,} from "react"
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import "./cartWidget.css"

const CartWidget = () => {
    const {calculateQuantity, cart} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    useEffect(()=>{
        setTotal(calculateQuantity())
    },[cart])
        return(
            <span className="car-widget">
                <Link to='/cart' className="car-widget__link">
                    <span className="car-widget__count">{total}</span>
                    <i className="fab fa-opencart navbar__icon icon-cart"></i>
                </Link>
            </span>
        )
}
export default CartWidget