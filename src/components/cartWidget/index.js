import React from "react";
import {Link} from 'react-router-dom';
import "./cartWidget.css";

const CartWidget = (props) => {
    return(
        <span className="car-widget"><Link to='/cart' className="car-widget__link"><i className="fab fa-opencart navbar__icon icon-cart"></i></Link></span>
    )
}

export default CartWidget;