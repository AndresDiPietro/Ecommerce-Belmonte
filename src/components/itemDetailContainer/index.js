import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Products from "../products.json";
import ItemDetail from "../itemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const {itemId} = useParams();
    
    //======Llamada fetch a archivo Json, que nuevamente dejó de funcionar y me gustaría saber cómo hacerla funcionar.

    // useEffect(()=>{
    //     setTimeout(() => {
    //         fetch('./listProducts.json')
    //         .then(res => res.json())
    //         .then(res => {
    //             setItem(res.filter(obj=> obj.id === itemId))
    //         })
    //     },2000)
    // },[itemId]);

    //=============================================================================================================

    useEffect(()=>{
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products.filter(product=> product.id == itemId))
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