import React, {useState, useEffect} from "react";
import ItemList from "../itemList";
import {useParams} from "react-router-dom";
import Products from "../products.json";
import "./itemListContainer.css";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoryId} = useParams();

    const callProducts = () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                if(categoryId === undefined) resolve(Products)
                else resolve(Products.filter(product=> product.category === categoryId))
            },2000)
        })
        promise.then((res)=>{
            setItems(res)
        })
    }

    let title; 
    items.map(item=> item.category === categoryId? title = categoryId : title = "Aprovechá el Hot Sale!")
    
    let classItemList;
    if(categoryId === undefined)classItemList = "item-list"
    else classItemList = "categoryItemsList"
    
    useEffect(()=>{
        callProducts()
    },[categoryId]);
    
    
    return(
        <section className="itemListContainer">
            <h2 className="itemListContainer__title">{title}</h2>
            <ItemList classItemList={classItemList} items={items}/>
        </section>
    )
}
export default ItemListContainer;