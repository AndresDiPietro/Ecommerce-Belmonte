import React from 'react'

const CartItem = ({item, cantidad, remove}) => {

    let previousPrice = item?.price+(item?.sale/100)*item?.price;
    return(
        <article >
            <img src={item?.pictureUrl} alt={item?.title}/>
            <h2>{item?.title}</h2>
            <div>{cantidad}</div>
            <div>
                <span>{item?.sale}% OFF</span>
                <div>$ {previousPrice}</div>
                <span>$ {item?.price}</span>
            </div>
            <button 
                onClick={()=>remove(item.id)}>
                Eliminar
            </button>
            <button 
                onClick={()=>console.log('Comprar ahora')}>
                Comprar ahora
            </button>
        </article>
    )
}
export default CartItem;