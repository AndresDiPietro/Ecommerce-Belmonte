import React from "react";
import {NavLink} from "react-router-dom";

const NavItem = (props) => {
    return(
        <li className='navbar__item'><NavLink to={props.link} activeClassName='nav-item__active' className='navbar__link'><i className={props.classIcon}></i>{props.content}</NavLink></li>
    )
};

export default NavItem;