import React, {useContext} from "react"
import "./itemdetail.css"
import ItemCount from "../itemCount"
import { Link } from "react-router-dom"
import {CartContext} from '../../context/CartContext'

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext)

    const previousPrice = item?.price+(item?.sale/100)*item?.price

    const addNewProduct = (contador) => {
        addItem(item, contador)
    }
    // const buyNow = () => {
    //     addItem(item, count)
    // }

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
                    
                    <ItemCount 
                        init={item?.stock>=1? 1 : null} 
                        stock={item?.stock} 
                        onAdd={addNewProduct}
                        />
                    <Link to="/cart">
                        <button 
                        // onClick={buyNow}
                        className="item-detail__buy-now">Terminar mi compra</button>
                    </Link>
                    
                </section>
                <section className="item-detail__description">
                    <h2 className="item-detail__description-title">Descripción</h2>
                    <p className="item-detail__description-paragraph">{item?.description}</p>
                </section>
            </article>
    )
}
export default ItemDetail