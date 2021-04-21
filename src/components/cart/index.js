import React, {useContext, useState} from "react"
import { Link } from "react-router-dom"
import {CartContext} from '../../context/CartContext'
import CartItem from "../cartItem"
import './cart.css'
import FormCart from '../form'
import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../../firebase'

const Cart = () => {
    const {cart, setCart, removeItem, clear, calculatePrice} = useContext(CartContext)
    const [buyId, setBuyId] = useState(null)
    const [prueba, setPrueba] = useState(null)
    
    const newOrder = (buyer) => {

        const db = getFirestore()
        const orderColl = db.collection('orders')

        let order = {}
        order.buyer = buyer
        order.total = calculatePrice()
        order.date = firebase.firestore.Timestamp.fromDate(new Date())
        order.items = cart.map(e=> {
            return  {id:e.item.id, title:e.item.title, quantity:e.quantity, price:e.item.price*e.quantity}
        })  

        orderColl.add(order)
        
        .then(({id})=>{
            setBuyId({id})
            
        })
        .catch(err=>{
            console.log(err)
        })
        // .finally(console.log(order))

//-----------------------------------------------------------------------

        const itemToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in' , cart.map(i =>i.item.id)
        )
    
        const batch = db.batch()
    
        itemToUpdate.get()
        .then(collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })
            batch.commit()
            .then(res => {
                console.log(res)
            })
            setCart([])
        })

    }
    const pruebaIf = () => {
        setPrueba(true)
    }


    return(
        <section className="cart">
            {cart.map(e=> <CartItem className="cart-item" item={e.item} quantity={e.quantity} key={e.item.id} stock={e.item.stock} remove={removeItem}/>)}

            {cart.length!==0? 
            <div className="cart__total">
                TOTAL: {calculatePrice()}
                <button className="cart__clear" onClick={clear}>
                    Vaciar carrito 
                </button>
                <button className="cart__finish" onClick={pruebaIf}>
                    Finalizar compra
                </button>
                {prueba? <FormCart buyer={newOrder}></FormCart>
                    :
                null
                }
                
            </div>
                :
            <div className="cart__empty">
                Tu carrito está vacío
                <Link className="cart__empty-link" to='/'>
                    <button className="cart__empty-button">
                        Ir por productos
                    </button>
                </Link>
            </div>}
        </section>
    )
}
export default Cart