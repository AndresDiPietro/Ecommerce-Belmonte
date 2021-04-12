import React, { useState, useContext, useEffect} from 'react'
import {CartContext} from '../../context/CartContext'

const CartItem = ({item, quantity, remove}) => {

    const {newCantItems} = useContext(CartContext)

    let previousPrice = item?.price+(item?.sale/100)*item?.price

    let [count, setCount] = useState(quantity)

    const addProduct = () => {      
        setCount(count + 1)
        
        // newCantItems(item, count+1)
    }
    
    const removeProduct = () => {
        setCount(count - 1)
        
        // newCantItems(item, count-1)
    }
    
    useEffect(()=>{
        newCantItems(item, count)
        
    },[count])
    
    return(
        <article >
            <img src={item?.pictureUrl} alt={item?.title}/>
            <h2>{item?.title}</h2>
            <div>{count}</div>
            <button 
                type="button"
                disabled={count <= 1}
                onClick={()=>removeProduct()}
                >
                    -
            </button>
            <button 
                type="button"
                onClick={()=>addProduct()}
                >
                    +
            </button>
            <div>
                <span>{item?.sale}% OFF</span>
                <div>$ {previousPrice}</div>
                <span>$ {item?.price}</span>
            </div>
            <button 
                onClick={()=>remove(item.id)}>
                Eliminar
            </button>
            <button 
                onClick={()=>console.log('Comprar ahora')}>
                Comprar ahora
            </button>
        </article>
    )
}
export default CartItem;