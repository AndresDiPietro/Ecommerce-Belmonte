import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Products from "../products.json";
import ItemDetail from "../itemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const {itemId} = useParams();
   
    useEffect(()=>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products.filter(product=> product.id === parseInt(itemId) ))
            },2000)
        })
        promise.then((res)=>setItem(res[0]))
        return;
    },[itemId]);

    return(
        <ItemDetail item={item}/>
    )
}
export default ItemDetailContainer;