import React from "react";
import ItemCount from "./itemCount";
import "./itemListContainer.css";
const ItemListContainer = ({greeting}) => {
    return(
        <div className="itemListContainer">
            <h2 className="itemListContainer__title">{greeting}</h2>
            <ItemCount 
            init="1" 
            stock="10" 
            onAdd={(num)=>{
                num > 1? console.log(`agregaste ${num} productos`) :console.log(`agregaste ${num} producto`)
                
            }}/>
        </div>
    )
}
export default ItemListContainer;