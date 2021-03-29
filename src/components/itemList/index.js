import React from "react";
import Item from "../item";

const ItemList = ({items}) => {
    return(
        <section className="item-list">
            {items.map((item=> <Item arrayItems={items} key={item.id} item={item} />))}
        </section>
    )
}
export default ItemList;