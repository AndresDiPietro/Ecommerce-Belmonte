import React, {useState, useEffect} from "react";
import productos from "./products.json";

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(res => setProduct(res))
    },[])

    return(
        <div>
            <ul>{productos.map(prod => <li key={prod.id} className="produ">{prod.title}</li>)}</ul>
        </div>
    )
}

export default ItemDetailContainer;