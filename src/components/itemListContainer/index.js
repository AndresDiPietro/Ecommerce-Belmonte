import React, {useState, useEffect} from "react"
import ItemList from "../itemList"
import {useParams} from "react-router-dom"
import "./itemListContainer.css"
import Loading from '../loading'
import {callProducts} from '../../firebase/firestore'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const {categoryId} = useParams()
    const [loader, setLoader] = useState(false)

    let title
    items.map(item=> item.category === categoryId? title = categoryId : title = "Aprovechá el Hot Sale!")
    
    let classItemList
    if(categoryId === undefined)classItemList = "item-list"
    else classItemList = "categoryItemsList"
    
    useEffect(()=>{
        callProducts(setLoader, categoryId, setItems)
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