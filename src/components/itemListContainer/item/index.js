import React from "react";
// import "./item.css";

const Item = ({item}) => {
    return(
    <article className="item">
        <h2 className="item__title">{item.title}</h2>
        <img className="item__img" src={item.pictureUrl}/>
        <p className="item__description">{item.shortDescription}</p>
        <span className="item__price">$ {item.price}</span>
    </article>
    )
}
 export default Item;