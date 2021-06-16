import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import ItemDetail from "../itemDetail"
import Loading from '../loading'
import {getItems} from '../../firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const {itemId} = useParams()
    const [loader, setLoader] = useState(false)

    useEffect(()=>{
        setLoader(true)
        if(itemId!==undefined){
            getItems(itemId)
            .then(res=>{
                if(res.exists){
                    setItem({id:res.id, ...res.data()})
                }
            })
        }
        setLoader(false)
    },[itemId])

    if(loader) return <Loading/>
    else return <ItemDetail item={item}/>
}
export default ItemDetailContainer