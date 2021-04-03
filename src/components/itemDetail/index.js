import React, {useState} from "react";
import "./itemdetail.css";
import ItemCount from "../itemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {
    let previousPrice = item?.price+(item?.sale/100)*item?.price;
    const [count, setCount] = useState(0);

    const cantProducts = (contador) => {
        setCount(contador)
    }
    return(
            <article className="item-detail">
                <img className="item-detail__img" src={item?.pictureUrl}/>
                <section className="item-detail__product">
                    <h1 className="item-detail__product-title">{item?.title}</h1>
                    <div className="price">
                        <span className="item-detail__product-previous">$ {previousPrice}</span>
                        <span className="item-detail__product-price">$ {item?.price}</span>
                        <span className="item-detail__product-sale">{item?.sale}% OFF</span>
                    </div>
                    {count == 0 ?
                        <ItemCount 
                            init={item?.stock>=1? 1 : null} 
                            stock={item?.stock} 
                            onAdd={cantProducts}/>
                            :
                        <Link to="/cart">
                            <button className="item-detail__buy-now">Terminar mi compra</button>
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