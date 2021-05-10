import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
// import Products from "../products.json"
import ItemDetail from "../itemDetail"
import Loading from '../loading'
import {getFirestore} from '../../firebase'

const getItems = (id) => {
    const db = getFirestore()
    const itemsCollection = db.collection('items')

    const item = itemsCollection.doc(id)
    return  item.get()
}

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    const [loader, setLoader] = useState(false)
    // useEffect(()=>{
    //     setLoader(true)
    //     const promise = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(Products.filter(product=> product.id === parseInt(itemId) ))
    //             setLoader(false)
    //         },2000)
    //     })
    //     promise.then((res)=>setItem(res[0]))
    //     return
    // },[itemId])
    useEffect(()=>{
        setLoader(true)
        getItems(itemId)
        .then(res=>{
            if(res.exists){
                setItem({id:res.id, ...res.data()})
            }
        })
        setLoader(false)
    },[itemId])

    if(loader) return <Loading/>
    else return <ItemDetail item={item}/>
}
export default ItemDetailContainer