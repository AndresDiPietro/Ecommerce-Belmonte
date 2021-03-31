import React from "react";
import "./cartWidget.css"
const CartWidget = (props) => {
    return(
        <li className={props.classItem}><a href={props.link} className={props.classLink}><i className="fab fa-opencart navbar__icon"></i></a></li>
    )
}

export default CartWidget;