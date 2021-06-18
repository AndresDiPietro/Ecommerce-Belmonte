
//Expresiones regulares y funciones para validar formulario de compra.

const validateUserName = (username) => {
    const userNameRegex = /[a-zA-ZñÑáéíóúÁÉÍÓÚ]{3,16}/
    if(userNameRegex.test(username)) return true 
}
const validatePhone = (phone) => {
    const userPhoneRegex = /[0-9]{7,16}/
    if(userPhoneRegex.test(phone)) return true 
}
const validateEmail = (email) => {
    const emailRegex = /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(emailRegex.test(email)) return true 
}

//--------------------------------------------------------------

    export const newName = (e, setState, state) => {
        if(validateUserName(e.target.value.trim())){        
            const newObj = {...state, name :e.target.value.trim()}
            setState(newObj)
        }else {
            const newObj = {...state, name :false}
            setState(newObj)
        }
    }
    export const newSurName = (e, setState, state) => {
        if(validateUserName(e.target.value.trim())){        
            const newObj = {...state, surName :e.target.value.trim()}
            setState(newObj)
        }else {
            const newObj = {...state, surName :false}
            setState(newObj)
        }
    }
    export const newPhone = (e, setState, state) => {
        if(validatePhone(e.target.value.trim())){        
            const newObj = {...state, phone :e.target.value.trim()}
            setState(newObj)
        }else {
            const newObj = {...state, phone :false}
            setState(newObj)
        }
    }
    export const newEmail = (e, setState, state) => {
        if(validateEmail(e.target.value.trim())){        
            const newObj = {...state, email :e.target.value.trim()}
            setState(newObj)
        }else {
            const newObj = {...state, email :false}
            setState(newObj)
        }
    }
    export const newEmailConfirm = (e, setState, state) => {
        if(validateEmail(e.target.value.trim()) && e.target.value.trim() === state.email ){
            const newObj = {...state, emailConfirm :e.target.value.trim()}
            setState(newObj)
        }else {
            const newObj = {...state, emailConfirm :false}
            setState(newObj)
        }
    }

//----------------------------------------------------------------------------

export const newSubmit = (e, state, fnCart, setErr) => {
    e.preventDefault()
    if(state.name !== false && state.surName !== false && state.phone !== false && state.email !== false && state.emailConfirm !== false){
        setErr(false)
        fnCart()
    } 
    else setErr(true)
}