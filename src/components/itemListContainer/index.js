import React, {useState, useEffect} from "react";
import ItemCount from "./itemCount";
import ItemList from "./itemList";
import "./itemListContainer.css";

const ItemListContainer = ({greeting}) => {
    const [items, setItems]=useState([]);

    useEffect(()=>{
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id:1, title:"Gorra Dark Side  of the printing", description:"Lorem ipsun is simply dummy text of the printing and typesetting industry.", price:2200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_756234-MLA31622530624_072019-O.webp"},
                    {id:2, title:"Gorro Wonder Woman  dummy text of the printing", description:"Lorem ipsun is simply dummy text of the printing and typesetting industry.", price:2200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_928057-MLA42131178684_062020-O.webp"},
                    {id:3, title:"Gorra Dark Side is simply dummy  the printing", description:"Lorem ipsun is simply dummy text of the printing and typesetting industry.", price:2200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_756234-MLA31622530624_072019-O.webp"},
                    {id:4, title:"Gorro Wonder Woman is simply dummy text of the ", description:"Lorem ipsun is simply dummy text of the printing and typesetting industry.", price:2200, pictureUrl:"https://http2.mlstatic.com/D_NQ_NP_928057-MLA42131178684_062020-O.webp"}
    
                ])
            },2000)
        })
        promise.then((res)=>{
            setItems(res)
        })
    },[]);

    return(
        <div className="itemListContainer">
            <h2 className="itemListContainer__title">{greeting}</h2>
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