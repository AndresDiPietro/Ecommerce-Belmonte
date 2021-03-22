import React, {useEffect, useState} from "react";
import Item from "../item";

const ItemList = ({items}) => {
    return <div>{items.map((item=><Item key={item.id} item={item}/>))}</div>
}
export default ItemList;