import React from "react";
import {Link} from "react-router-dom";

const NavItem = (props) => {
    return(
        <li className={props.classItem}><Link to={props.link} className={props.classLink}><i className={props.classIcon}></i>{props.content}</Link></li>
    )
};

export default NavItem;