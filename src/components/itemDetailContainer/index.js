import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Products from "../products.json"
import ItemDetail from "../itemDetail"
import Loading from '../loading'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    const [loader, setLoader] = useState(false)
   
    useEffect(()=>{
        setLoader(true)
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(Products.filter(product=> product.id === parseInt(itemId) ))
                setLoader(false)
            },2000)
        })
        promise.then((res)=>setItem(res[0]))
        return
    },[itemId])
    if(loader) return <Loading/>
    else return <ItemDetail item={item}/>
}
export default ItemDetailContainer