import React from "react";
import ItemCount from "./itemCount";
import "./itemListContainer.css";
const ItemListContainer = ({greeting}) => {
    return(
        <div className="itemListContainer">
            <h2 className="itemListContainer__title">{greeting}</h2>
            <ItemCount init="1" stock="7"/>
        </div>
    )
}
export default ItemListContainer;