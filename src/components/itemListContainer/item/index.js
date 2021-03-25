import React from "react";
import {Link} from "react-router-dom";

const Item = ({item}) => {
    return(
        <Link className="item-link" to={`/item/${item.id}`}>
            <article className="item">
                <img className="item__img" src={item.pictureUrl}/>
                <span className="item__price">$ {item.price}</span>
                <span className="item__sale">12% OFF</span>
                <h3 className="item__title">{item.title}</h3>
            </article>
        </Link>
    )
}
 export default Item;