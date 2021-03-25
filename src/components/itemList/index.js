import React from "react";
import Item from "../item";
// import "../../item/item.css";

const ItemList = ({items}) => {
    // console.log(items)
    return(
        
        <section className="item-list">
            {items.map((item=> <Item arrayItems={items} key={item.id} item={item} />))}
        </section>
    )
}
export default ItemList;