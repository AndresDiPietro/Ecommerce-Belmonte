import React from "react";
// import "./item.css";

const Item = ({item}) => {
    return(
    <article className="item">
        <img className="item__img" src={item.pictureUrl}/>
        <span className="item__price">$ {item.price}</span>
        <span className="item__sale">12% OFF</span>
        <h3 className="item__title">{item.title}</h3>
    </article>
    )
}
 export default Item;