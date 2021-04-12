import React, {useContext, useEffect, useState} from "react"
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import "./cartWidget.css"

const CartWidget = () => {
    const {calculateQuantity,cart} = useContext(CartContext)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        let itemsQuantity = calculateQuantity()
        setCount(itemsQuantity)
    },[cart])

    return(
        <span className="car-widget"><Link to='/cart' className="car-widget__link">{count}<i className="fab fa-opencart navbar__icon icon-cart"></i></Link></span>
    )
}
export default CartWidget