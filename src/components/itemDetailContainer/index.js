import React, {useState, useEffect} from "react";
// import productos from "./products.json";

const ItemDetailContainer = () => {
    
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("./products.json")
        .then(res => res.json())
        .then(res => setProducts(res.text()))
    },[])
    
    return(
        <div>
            <ul>{products.map(prod => <li key={prod.id} className="product">{prod.title}</li>)}</ul>
        </div>
    )
}

export default ItemDetailContainer;