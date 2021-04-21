import React from "react"
import {Link, useParams} from "react-router-dom"
import "./item.css"

const Item = ({item}) => {

    const {categoryId} = useParams()

    let previousPrice = item?.price+(item?.sale/100)*item?.price

    const stockItem = item?.stock

    // const linkIf = () => {
    //     if(categoryId === undefined)
    //         return item?.stock !== 0 ? 
    //         `/item/${item.id}`
    //             :
    //         `/`
    //     else return item?.stock !== 0 ? 
    //         `/item/${item.id}`
    //             :
    //         `/`
    // }



    if(categoryId === undefined){
        if(stockItem!== 0){
            return(
                <Link className="item-link" to={`/item/${item.id}`}>
                    <article className="item">
                        <img className="item__img" src={item.pictureUrl} alt={item.title}/>
                        <div className="price">
                            <span className="item__previous-price">$ {previousPrice}</span>
                            <span className="item__price">$ {item.price}</span>
                            <span className="item__sale">12% OFF</span>
                        </div>
                        <h3 className="item__title">{item.title}</h3>
                    </article>
                </Link>
            )
        }else return(
            <article className="item">
            <img className="item__img" src={item.pictureUrl} alt={item.title}/>
            <div className="price">
                {/* <span className="item__previous-price">$ {previousPrice}</span> */}
                {/* <span className="item__price">$ {item.price}</span> */}
                {/* <span className="item__sale">12% OFF</span> */}
                <span>No disponible</span>
            </div>
            <h3 className="item__title">{item.title}</h3>
        </article>
        )
    }else {
        if(stockItem!== 0){
            return(
                    
                    <Link className="item-link--2" to={`/item/${item.id}`}>
                        <article className="item--2">
                            <img className="item__img--2" src={item.pictureUrl} alt={item.title}/>
                            <h3 className="item__title--2">{item.title}</h3>
                            <div className="price--2">
                                <span className="item__previous-price--2">$ {previousPrice}</span>
                                <span className="item__price--2">$ {item.price}</span>
                                <span className="item__sale--2">12% OFF</span>
                            </div>
                        </article>
                    </Link>
                
            )
        }else return(
            <article className="item--2">
            <img className="item__img--2" src={item.pictureUrl} alt={item.title}/>
            <h3 className="item__title--2">{item.title}</h3>
            <div className="price--2">
                {/* <span className="item__previous-price--2">$ {previousPrice}</span>
                <span className="item__price--2">$ {item.price}</span>
                <span className="item__sale--2">12% OFF</span> */}
                <span>No disponible</span>
            </div>
        </article>
        )
    }
}
 export default Item