import React, { useState } from "react";

export const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        let newItem = {item:item, quantity:quantity}

        if(cart.some(e => e.item.id === newItem.item.id))console.log('el producto está siendo duplicado')
        else cart.push(newItem)
        
        setCart(cart)
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) => {
        let newCart = cart.filter(e=> e.item.id !== itemId)
        setCart(newCart)  
    } // Remover un item del cart usando su id

    const clear = () => {
        setCart([])
    } // Remover todos los items
        
        // const isInCart = (id) => {
            
        //     }
    return(
        <CartContext.Provider value={{addItem, cart, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}