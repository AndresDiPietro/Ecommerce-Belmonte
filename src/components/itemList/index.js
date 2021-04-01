import React from "react";
import Item from "../item";

const ItemList = ({items, classItemList }) => {

    return(
        <div className={classItemList}>
            {items.map((item=> <Item arrayItems={items} key={item.id} item={item} />))}
        </div>
    )
}
export default ItemList;