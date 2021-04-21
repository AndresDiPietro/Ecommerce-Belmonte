import React, { useState } from "react";

export const CartContext = React.createContext({})

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])

    const addItem = (newItem, newQuantity) => {

        if(cart.some(e=>e.item.id === newItem.id)){
            let {quantity} = cart.find(e=> e.item.id === newItem.id)
            let newCart = cart.filter(e => e.item.id !== newItem.id)
            setCart([...newCart, { item: newItem , quantity: quantity + newQuantity}]) 
            
        }else {
            const newProduct = { item: newItem , quantity: newQuantity }
            setCart([...cart, newProduct])
        }
    } // agregar cierta cantidad de un ítem al carrito

    const removeItem = (itemId) => {
        let newCart = cart.filter(e=> e.item.id !== itemId)
        setCart(newCart)
    } // Remover un item del cart usando su id

    const clear = () => {
        setCart([])
    } // Remover todos los items
        
    const calculateQuantity = () => {
        return cart.reduce((count, cantidad)=>{
            return count + cantidad.quantity
        },0)
    }//Calcular cantidad de items en el carrito

    const calculatePrice = () => {
        return cart.reduce((count, item)=>{
            return count + item.quantity * item.item.price
        },0)
    }//Calcular precio total del carrito

    const newCantItems = (newItem, newQuantity) => {
        const indexOfNewItem = cart.findIndex(e=>e.item.id === newItem.id)
        const newProduct = {item:newItem, quantity:newQuantity}
        const carrito = cart.slice()
        carrito.splice(indexOfNewItem,1,newProduct)
        setCart(carrito)
    }//Modificar la cántidad de unidades de cada producto en el cart

    return(
        <CartContext.Provider value={{addItem, cart, setCart, removeItem, clear, calculateQuantity, calculatePrice, newCantItems}}>
            {children}
        </CartContext.Provider>
    )
}