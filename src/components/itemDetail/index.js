import React from "react";

const ItemDetail = ({item}) => {
    
    // console.log(item)
    
    return(
            <article>
                <h3>{item?.title}</h3>
                <p>{item?.descript}</p>
                <span>$ {item?.price}</span>
                <img src={item?.pictureUrl}/>
            </article>
    )
}
export default ItemDetail;