import React, { useState } from "react";

export const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (newItem, newQuantity) => {
        let {quantity = 0} = cart.find(e=> e.item.id === newItem.id) || {}
        let newCart = cart.filter(e => e.item.id !== newItem.id)
        setCart([...newCart, { item: newItem , quantity: quantity + newQuantity }])  
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) => {
        let newCart = cart.filter(e=> e.item.id !== itemId)
        setCart(newCart)
    } // Remover un item del cart usando su id

    const clear = () => {
        setCart([])
    } // Remover todos los items
        
    const calcularTotal = () => {
        return cart.reduce((count, cantidad)=>{
            return count + cantidad.quantity
        },0)
    }//Calcular cantidad de items en el carrito

    const calcularPrecio = () => {
        return cart.reduce((count, item)=>{
            return count + item.quantity * item.item.price
        },0)
    }//Calcular precio total del carrito

    const newCantItems = (newItem, newQuantity) => {
        const newProduct = {item:newItem, quantity:newQuantity}
        const newCart = cart.filter(e=> e.item.id !== newItem.id)
        
        setCart([...newCart, newProduct]) 
        console.log(`Nueva cantidad: ${newQuantity}`)
    }

    return(
        <CartContext.Provider value={{addItem, cart, removeItem, clear, calcularTotal, calcularPrecio, newCantItems}}>
            {children}
        </CartContext.Provider>
    )
}