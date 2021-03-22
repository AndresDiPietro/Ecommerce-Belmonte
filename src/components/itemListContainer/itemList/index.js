import React, {useEffect, useState} from "react";
import Item from "../item";
import "../item/item.css";

const ItemList = ({items}) => {
    return <section className="item-list">{items.map((item=><Item key={item.id} item={item}/>))}</section>
}
export default ItemList;