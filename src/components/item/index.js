import React from "react";
import {Link} from "react-router-dom";
import "./item.css";

const Item = ({item}) => {
    let previousPrice = item?.price+(item?.sale/100)*item?.price;
    return(
        // <Link className="item-link" to={`/item/${item.id}`}>
        //     <article className="item">
        //         <img className="item__img" src={item.pictureUrl}/>
        //         <span className="item__price">$ {item.price}</span>
        //         <span className="item__sale">12% OFF</span>
        //         <h3 className="item__title">{item.title}</h3>
        //     </article>
        // </Link>
            <Link className="item-link--2" to={`/item/${item.id}`}>
                <article className="item--2">
                    <img className="item__img--2" src={item.pictureUrl}/>
                    <h3 className="item__title--2">{item.title}</h3>
                    <div className="precio">
                        <span className="item__previous-price">$ {previousPrice}</span>
                        <span className="item__price--2">$ {item.price}</span>
                        <span className="item__sale--2">12% OFF</span>
                    </div>
                </article>
            </Link>
    )
}
 export default Item;