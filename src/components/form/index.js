import React, { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from "react-router-dom"
import { newName, newSurName, newPhone, newEmail, newSubmit} from '../../regEx'
import {newOrder} from '../../firebase/firestore'
import './form.css'

const FormCart = () => {
    const [formIsValid, setFormIsValid] = useState({name: false, surName:false, phone: false, email: false})
    const [idBuy, setIdBuy] = useState(null)
    const {cart, setCart, calculatePrice} = useContext(CartContext)
    
    const newBuy = ()=>{
        newOrder(formIsValid, setIdBuy, cart, setCart, calculatePrice)
    }

    if (idBuy) return(
        <div className='voucher'>
            <h1 className='voucher__title'>Su compra ha sido exitosa!</h1>
            <p className='voucher__p'>Código de comprobante: <span className='voucher__id'>{idBuy.id}</span></p>
            <Link className='voucher__link' to='/'>Aceptar</Link>
        </div>
    ) 
    return(
        <div>  
            <form className='cart-form' onSubmit={(e)=>newSubmit(e, formIsValid, newBuy)}>
                <div className='cart-form__container'>
                    <label className='cart-form__label' htmlFor='name'>Nombre
                        <input className='cart-form__input' id='name' type='text' placeholder='Sam' minLength='3' maxLength='16' required onChange={(e)=>newName(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='surname'>Apellido
                        <input className='cart-form__input' id='surname' type='text' placeholder='Peterson' minLength='3' maxLength='16' required onChange={(e)=>newSurName(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='phone'>Teléfono
                        <input className='cart-form__input' id='phone' type='number' placeholder='1534254' min='7' required onChange={(e)=>newPhone(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <label className='cart-form__label' htmlFor='email'>Email
                        <input className='cart-form__input' id='email' type='email' placeholder='sampeterson@gmail.com' required onChange={(e)=>newEmail(e,setFormIsValid, formIsValid)}/>
                    </label>
                    <input className='cart-form__submit'  type='submit' />
                </div>
            </form>
        </div>
    )
}
export default FormCart