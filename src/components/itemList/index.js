import React from "react";
import Item from "../item";

const ItemList = ({items}) => {
    return(
        <div className="item-list">
            {items.map((item=> <Item arrayItems={items} key={item.id} item={item} />))}
        </div>
    )
}
export default ItemList;