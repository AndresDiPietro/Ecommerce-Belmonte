import React from "react";

const ItemListContainer = (props) => {
    return(
        <li className={props.classItem}><a href={props.link} className={props.classLink}><i className={props.classIcon}></i>{props.content}</a></li>
    )
};

export default ItemListContainer;