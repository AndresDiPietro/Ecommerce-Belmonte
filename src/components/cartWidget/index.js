import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext'
import "./cartWidget.css";

const CartWidget = (props) => {
    const {calcularTotal} = useContext(CartContext)
    let cantItems = calcularTotal()
    return(
        <span className="car-widget"><Link to='/cart' className="car-widget__link">{cantItems}<i className="fab fa-opencart navbar__icon icon-cart"></i></Link></span>
    )
}

export default CartWidget;