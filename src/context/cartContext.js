import React, { useState } from "react";

// const addItem = (a, b) => {
//     console.log(a, b)

// } 
export const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
            setCart(cart.push(item))

    } // agregar cierta cantidad de un ítem al carrito
    // useEffect(()=>{
    //     addItem()
    // },[cart])

    return(
        <CartContext.Provider value={{addItem}}>
            {children}
        </CartContext.Provider>
    )
    // const removeItem = (itemId) => {

    // } // Remover un item del cart por usando su id
    // const clear = () => {

    // } // Remover todos los items

    // const isInCart = (id) => {

    // }

    // const isInCart = (id) => {

    // }

}