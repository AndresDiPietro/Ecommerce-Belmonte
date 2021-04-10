import React, { useState } from "react";

export const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    // const [totalItemsCart, setTotalItemsCart] = useState(0)

    const addItem = (newItem, newQuantity) => {
        let {quantity = 0} = cart.find(e=> e.item.id === newItem.id) || {}
        
        let newCart = cart.filter(e => e.item.id !== newItem.id)

        setCart([...newCart, { item: newItem , quantity: quantity + newQuantity }])
        
        // calcularTotal(cart)//Cantidad de items en el cart
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) => {
        let newCart = cart.filter(e=> e.item.id !== itemId)
        setCart(newCart)
        // calcularTotal(newCart) 

        // totalItems(cart)//Cantidad de items en el cart
    } // Remover un item del cart usando su id

    const clear = () => {

        setCart([])
        
        // setTotalItemsCart(0)//Cantidad de items en el cart
    } // Remover todos los items

    // const totalItems = (carrito) => {
    //     let casiTotal = []
    //     let total
    //     carrito.map((e=> casiTotal.push(e.quantity)))
    //     carrito>0 ? total = casiTotal.reduce((a,b)=>a+b) : total= casiTotal
    //     // console.log(`Total de elem en el cart ${total}`)
    //     setTotalItemsCart(total)
    // }//Cantidad de items en el carr
        
    const calcularTotal = () => {
        return cart.reduce((count, cantidad)=>{
            return count + cantidad.quantity
        },0)
    }
    const calcularPrecio = () => {
        return cart.reduce((count, item)=>{
            return count + item.quantity * item.item.price
        },0)
    }

        // const isInCart = (id) => {
            
        //     }
    return(
        <CartContext.Provider value={{addItem, cart, removeItem, clear, calcularTotal, calcularPrecio}}>
            {children}
        </CartContext.Provider>
    )
}