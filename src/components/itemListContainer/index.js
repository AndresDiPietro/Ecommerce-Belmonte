import React, {useState, useEffect} from "react";
import ItemCount from "../itemCount";
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
                if(categoryId == undefined) resolve(Products)
                else resolve(Products.filter(product=> product.category === categoryId))
            },2000)
        })
        promise.then((res)=>{
            setItems(res)
        })
    }
    useEffect(()=>{
        callProducts()
    },[categoryId]);
    
    let title; 
    items.map(item=> item.category == categoryId? title = categoryId : title = undefined)
    
    return(
        <div className="itemListContainer">
            <h2 className="itemListContainer__title">{title}</h2>
            <ItemList items={items}/>
            <ItemCount 
            init={1} 
            stock={10} 
            onAdd={(num)=>{
                num > 1? console.log(`agregaste ${num} productos`) :console.log(`agregaste ${num} producto`)    
            }}/>
        </div>
    )
}
export default ItemListContainer;