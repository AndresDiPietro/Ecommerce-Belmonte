import React, {useContext,} from "react"
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext'
import "./cartWidget.css"

const CartWidget = () => {
    const {calculateQuantity} = useContext(CartContext)
    if(calculateQuantity()!=0){
        return(
            <span className="car-widget">
                <Link to='/cart' className="car-widget__link">
                    <span className="car-widget__count">{calculateQuantity()}</span>
                    <i className="fab fa-opencart navbar__icon icon-cart"></i>
                </Link>
            </span>
        )
    }else return(
        null
    )
}
export default CartWidget