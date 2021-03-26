import React from "react";
import "./itemdetail.css";

const ItemDetail = ({item}) => {
    let previousPrice = item?.price+(item?.sale/100)*item?.price;
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
                    <button className="item-detail__buy-now">Comprar ahora</button>
                </section>
                <section className="item-detail__description">
                    <h2 className="item-detail__description-title">Descripción</h2>
                    <p className="item-detail__description-paragraph">{item?.description}</p>
                </section>
            </article>
    )
}
export default ItemDetail;