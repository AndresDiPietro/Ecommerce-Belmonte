import React from "react";

const Item = ({item}) => {
    return(
    <article>
        <h2>{item.title}</h2>
        <img src={item.pictureUrl}/>
        <p>{item.shortDescription}</p>
        <span>{item.price}</span>
    </article>
    )
}
 export default Item;