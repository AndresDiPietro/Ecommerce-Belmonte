import React, { useState } from 'react'
import './form.css'
const validateUserName = (username) => {
    const userNameRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,16}$/
    if(userNameRegex.test(username)) return true //console.log('username válido')
    // else console.log('username incorrecto')
}
const validatePhone = (phone) => {
    const userPhoneRegex = /^[1-9]{7,16}$/
    if(userPhoneRegex.test(phone)) return true //console.log('userphone válido')
    // else console.log('userphone incorrecto')
}
const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(emailRegex.test(email)) return true //console.log('email válido')
    // else console.log('email incorrecto')
}

const FormCart = ({buyer}) => {
    const [formIsValid, setFormIsValid] = useState({name: false, phone: false, email: false})
    
    const newName = (e) => {
        if(validateUserName(e.target.value.trim())){        
            const newObj = {...formIsValid, name :e.target.value.trim()}
            setFormIsValid(newObj)
        }else {
            const newObj = {...formIsValid, name :false}
            setFormIsValid(newObj)
        }
    }
    const newPhone = (e) => {
        if(validatePhone(e.target.value.trim())){        
            const newObj = {...formIsValid, phone :e.target.value.trim()}
            setFormIsValid(newObj)
        }else {
            const newObj = {...formIsValid, phone :false}
            setFormIsValid(newObj)
        }
    }
    const newEmail = (e) => {
        if(validateEmail(e.target.value.trim())){        
            const newObj = {...formIsValid, email :e.target.value.trim()}
            setFormIsValid(newObj)
        }else {
            const newObj = {...formIsValid, email :false}
            setFormIsValid(newObj)
        }
    }
    const newSubmit = (e) => {
        e.preventDefault()
        if(formIsValid.name !== false && formIsValid.phone !== false && formIsValid.email !== false){
        buyer(formIsValid)
        }
    }
    const valid = ()=>{
        if(formIsValid.name !== false && formIsValid.phone !== false && formIsValid.email !== false) return false
        else return true
    }

    return(
        <form onSubmit={newSubmit}>
            <label htmlFor='name'>Nombre</label>
            <input className='form__input' id='name' type='text' placeholder='nombre' minLength='3' maxLength='16' required onChange={newName}/>

            <label htmlFor='phone'>Teléfono</label>
            <input className='form__input' id='phone' type='number' placeholder='1234' min='7' required onChange={newPhone}/>

            <label htmlFor='email'>Email</label>
            <input className='form__input' id='email' type='email' placeholder='email' required onChange={newEmail}/>

            <input disabled={valid()} type='submit' />
        </form>
    )
}
export default FormCart