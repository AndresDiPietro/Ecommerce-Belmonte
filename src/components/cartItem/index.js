import React, { useState, useContext} from 'react'
import {CartContext} from '../../context/CartContext'
import './cart-item.css'

const CartItem = ({item, quantity, stock, remove}) => {

    const {newCantItems} = useContext(CartContext)

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
        <article className='cart-item'>
            <img src={item?.pictureUrl} alt={item?.title} className='cart-item__img'/>
            <h2 className='cart-item__title' >{item?.title}</h2>
            <div className='cart-item__add'>
                <div className='cart-item__buttons'>
                    <button 
                        className='cart-item__minus'
                        type="button"
                        disabled={count <= 1}
                        onClick={removeProduct}
                        >
                            -
                    </button>
                    <div className='cart-item__count'>{count}</div>
                    <button 
                        className='cart-item__plus'
                        type="button"
                        disabled={count >= stock}
                        onClick={addProduct}
                        >
                            +
                    </button>
                </div>
                <span className='cart-item__stock'>{item?.stock}disponibles</span>
            </div>    
            <span className='cart-item__price'>${item?.price}</span>
            <button className='cart-item__delete'onClick={deleteProduct}>
                Eliminar
            </button>
        </article>
    )
}
export default CartItem