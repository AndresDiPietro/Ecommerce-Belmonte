import React from "react";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return(
        <li className={props.classItem}><NavLink to={props.link} activeClassName='nav-item__active' className={props.classLink}><i className={props.classIcon}></i>{props.content}</NavLink></li>
    )
};

export default NavItem;