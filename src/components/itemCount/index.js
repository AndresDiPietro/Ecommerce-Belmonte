import React, {useEffect, useState} from "react"
import "./itemcount.css"

const ItemCount = ({init, stock, onAdd}) => {
    
    const [count, setCount] = useState(init)

    useEffect(() =>{
        setCount(init)
        return
    },[init])

    const addProduct = () => {
        setCount(count + 1)
    }
    const removeProduct = () => {
        setCount(count - 1)
    }

    if(stock===0){
        return(
            <div className="itemcount__avail">No disponible</div>
        )
    }else return(
        <>  
            <div className="stock">
                <span className="itemcount__avail">Stock disponible</span>
                <span className="itemcount__stock">({stock})</span>
            </div>
            <form className="itemcount__form">
                <div className="itemcount__form-div">
                    {count>1?
                    <span className="itemcount__count">Cantidad: {count} unidades</span>
                        :
                    <span className="itemcount__count">Cantidad: {count} unidad</span>
                    }
                    <button 
                        type="button"
                        className="itemcount__minus"
                        disabled={count <= 1}
                        onClick={removeProduct}
                    >
                        -
                    </button>
                    <button 
                        type="button"
                        className="itemcount__plus"
                        disabled={count >= stock}
                        onClick={addProduct}
                    >
                        +
                    </button>
                </div>
                <button
                    type="button"
                    className="itemcount__addcart"
                    disabled={stock <= 0 }
                    onClick={()=> onAdd(count)}>
                    {stock <= 0? "No disponible":"Agregar al carrito"}
                </button>
            </form>
        </>
    )
}   
export default ItemCount