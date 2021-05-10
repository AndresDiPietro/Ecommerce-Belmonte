import React, { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from "react-router-dom"
import { newName, newSurName, newPhone, newEmail, newEmailConfirm, newSubmit} from '../../regEx'
import {newOrder} from '../../firebase/firestore'
import Loading from '../loading'
import './form.css'

const FormCart = () => {
    const [formIsValid, setFormIsValid] = useState({name: false, surName:false, phone: false, email: false, emailConfirm: false})
    const [order, setOrder] = useState(null)
    const {cart, setCart, calculatePrice} = useContext(CartContext)
    const [err, setErr] = useState(false)
    const [spinner, setSpinner] = useState(false)
    
    const newBuy = ()=>{
        newOrder(formIsValid, setOrder, cart, setCart, calculatePrice, setSpinner)
    }

    if (order) return(
        <div className='voucher'>
            <h1 className='voucher__title'>Gracias por tu compra, {order.buyer.name}!</h1>
            <ul className='voucher__list'>
                {order.items.map(item=><li key={item.id} className='voucher__list-item'>{item.quantity} {item.title}: <span className='voucher__list-price'>${item.price}</span></li>)}
            </ul>
            <p className='voucher__total' >Precio total: <span className='voucher__total-price'>${order.total}</span></p>
            <p className='voucher__p'>Código de comprobante: <span className='voucher__id'>{order.newId.id}</span></p>
            <Link className='voucher__link' to='/'>Aceptar</Link>
        </div>
    ) 
    return(
        <div>  
            {spinner? <Loading/>
                :
            <form className='cart-form' onSubmit={(e)=>newSubmit(e, formIsValid, newBuy, setErr)}>
                <div className='cart-form__container'>
                    <label className='cart-form__label' htmlFor='name'>Nombre
                        <input className='cart-form__input' id='name' type='text' placeholder='Sam' minLength='3' maxLength='16' required onChange={(e)=>newName(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='surname'>Apellido
                        <input className='cart-form__input' id='surname' type='text' placeholder='Peterson' minLength='3' maxLength='16' required onChange={(e)=>newSurName(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='phone'>Teléfono
                        <input className='cart-form__input' id='phone' type='tel' placeholder='1534254' minLength='7' required onChange={(e)=>newPhone(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='email'>Email
                        <input className='cart-form__input' id='email' type='email' placeholder='sampeterson@gmail.com' required onChange={(e)=>newEmail(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='email'>Confirmar Email
                        <input className='cart-form__input' id='email' type='email' placeholder='sampeterson@gmail.com' required onChange={(e)=>newEmailConfirm(e,setFormIsValid, formIsValid)}/>
                    </label>
                    {err?<div className='cart-form__err'>Confirmación de Emil incorrecta</div>
                        :
                    null
                    }   
                    <input className='cart-form__submit'  type='submit' />
                </div>
            </form>
            }
        </div>
    )
}
export default FormCart