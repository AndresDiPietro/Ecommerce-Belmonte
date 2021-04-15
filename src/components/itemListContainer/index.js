import React, {useState, useEffect} from "react"
import ItemList from "../itemList"
import {useParams} from "react-router-dom"
import Products from "../products.json"
import "./itemListContainer.css"
import Loading from '../loading'
import {getFirestore} from '../../firebase'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    const [loader, setLoader] = useState(false)
    
    // const callProducts = () => {
    //     setLoader(true)
    //     const promise = new Promise((resolve) => {
    //         setTimeout(() => {
    //             if(categoryId === undefined) resolve(Products)
    //             else resolve(Products.filter(product=> product.category === categoryId))
    //             setLoader(false)
    //         },2000)
    //     })
    //     promise.then((res)=>{
    //         setItems(res)
    //     })
    // }
    const callProducts = () => {
        setLoader(true)
        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const prom = itemsCollection.get()
        
        prom.then((res)=>{
            if(res.size>0){
                setItems(res.docs.map(doc =>{
                    return {id: doc.id, ...doc.data()}
                }))
            }
            console.log(items)
        })
        setLoader(false)
    }
    
    let title
    items.map(item=> item.category === categoryId? title = categoryId : title = "Aprovechá el Hot Sale!")
    
    let classItemList
    if(categoryId === undefined)classItemList = "item-list"
    else classItemList = "categoryItemsList"
    
    useEffect(()=>{
        callProducts()
    },[categoryId])
    
    return(    
        <section className="itemListContainer">
            <h2 className="itemListContainer__title">{title}</h2>
            {
            loader? <Loading/>
                :   
            <ItemList classItemList={classItemList} items={items}/>
            }
        </section>     
    )
}
export default ItemListContainer