import React, {useState, useEffect} from "react";
import ItemCount from "./itemCount";
import ItemList from "./itemList";
import {useParams} from "react-router-dom";
import Products from "../products.json";
import "./itemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [items, setItems]=useState([]);
    const {categoryId} = useParams();
    // useEffect(()=>{
    //     setTimeout(() => {
    //         fetch("./listProducts.json")
    //         .then(res => res.json())
    //         .then(res => {
    //             setItems(res.filter(obj=> obj.category === categoryId))
    //         })
    //     },2000)
    useEffect(()=>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products.filter(product=> product.category === categoryId))
            },2000)
        })
        promise.then((res)=>setItems(res))
    },[categoryId]);

    return(
        <div className="itemListContainer">
            <h2 className="itemListContainer__title">{categoryId}</h2>
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