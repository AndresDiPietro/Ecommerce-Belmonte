import React, { useState, useContext, useEffect } from 'react'
import {CartContext} from '../../context/CartContext'

const CartItem = ({item, cantidad, remove}) => {
    console.log('item renderizado')
    const {newCantItems} = useContext(CartContext)

    let previousPrice = item?.price+(item?.sale/100)*item?.price;

    let [contador, setContador] = useState(cantidad)

    const addProduct = (newItem, count) => {

        setContador(cantidad + 1);

        newCantItems(newItem, count+1)
    }
    const removeProduct = (newItem, count) => {
        setContador(cantidad - 1);
        newCantItems(newItem, count-1)
    }
    useEffect(()=>{

    },[contador])
    
    return(
        <article >
            <img src={item?.pictureUrl} alt={item?.title}/>
            <h2>{item?.title}</h2>
            <div>{contador}</div>
            <button 
                type="button"
                disabled={contador <= 1}
                onClick={()=>removeProduct(item, contador)}
                >
                    -
            </button>
            <button 
                type="button"
                onClick={()=>addProduct(item, contador)}
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