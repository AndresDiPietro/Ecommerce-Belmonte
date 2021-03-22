import React, {useEffect, useState} from "react";
import "./itemcount.css";

const ItemCount = ({init, stock, onAdd}) => {
    
    const [count, setCount] = useState(init);

    useEffect(() =>{
        setCount(init);
        return;
    }, [init]);

    const addProduct = () => {
        setCount(count + 1);
    }

    const removeProduct = () => {
        setCount(count - 1);
    }
    return(
        <div className="itemcount">
            <div className="itemcount__buttons">
                <button 
                type="button"
                className="itemcount__minus"
                disabled={count <= 1}
                onClick={removeProduct}
                >
                    -
                </button>
                <div className="itemcount__count">{count}</div>
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
            onClick={()=> onAdd(count)}
            >
                Agregar al carrito
            </button>
        </div>

    )
}   
export default ItemCount;