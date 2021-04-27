import React, { useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext'

const CartItem = ({item, quantity, stock, remove}) => {

    const {newCantItems} = useContext(CartContext)

    let previousPrice = item?.price+(item?.sale/100)*item?.price

    let [count, setCount] = useState(quantity)
    
    const addProduct = () => {      
        setCount(count + 1)
        newCantItems(item, count+1)
    }
    
    const removeProduct = () => {
        setCount(count - 1)
        newCantItems(item, count-1)
    }
    
    const deleteProduct = () => {
        remove(item.id)
    }
    
    return(
        <article >
            <img src={item?.pictureUrl} alt={item?.title}/>
            <h2>{item?.title}</h2>
            <div>{count}</div>
            <button 
                type="button"
                disabled={count <= 1}
                onClick={removeProduct}
                >
                    -
            </button>
            <button 
                type="button"
                disabled={count >= stock}
                onClick={addProduct}
                >
                    +
            </button>
            <div>
                <span>{item?.sale}% OFF</span>
                <div>Antes $ {previousPrice}</div>
                <span>Ahora $ {item?.price}</span>
            </div>
            <button 
                onClick={deleteProduct}>
                Eliminar
            </button>
        </article>
    )
}
export default CartItem