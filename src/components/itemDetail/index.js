import React, {useState, useContext} from "react";
import "./itemdetail.css";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";
import {CartContext} from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)

    let previousPrice = item?.price+(item?.sale/100)*item?.price;
    const [count, setCount] = useState(0);
    
    const cantProducts = (contador) => {
        setCount(contador)
    }
     
    return(
            <article className="item-detail">
                <img className="item-detail__img" src={item?.pictureUrl} alt={item?.title}/>
                <section className="item-detail__product">
                    <h1 className="item-detail__product-title">{item?.title}</h1>
                    <div className="price">
                        <div className="item-detail__product-previous">$ {previousPrice}</div>
                        <span className="item-detail__product-price">$ {item?.price}</span>
                        <span className="item-detail__product-sale">{item?.sale}% OFF</span>
                    </div>
                    {count === 0 ?
                        <ItemCount 
                            init={item?.stock>=1? 1 : null} 
                            stock={item?.stock} 
                            onAdd={cantProducts}/>
                            :
                        <Link to="/cart">
                            <button 
                            onClick={()=>addItem(item, count)}
                            className="item-detail__buy-now">Terminar mi compra</button>
                        </Link>
                    } 
                </section>
                <section className="item-detail__description">
                    <h2 className="item-detail__description-title">Descripción</h2>
                    <p className="item-detail__description-paragraph">{item?.description}</p>
                </section>
            </article>
    )
}
export default ItemDetail;