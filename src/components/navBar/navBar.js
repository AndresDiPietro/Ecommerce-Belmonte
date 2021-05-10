import React, { useState } from "react";
import NavItem from "./navItems.js";
import IconBars from "../iconBars/iconBars";
import CartWidget from "../cartWidget";
import "./navbar.css";
import { Link} from "react-router-dom";

const NavBar = () => {

    const [active, setActive] = useState(true);
    
    const classIcon = active ? "navbar__icon-bars" : "navbar__icon-bars navbar__icon-bars--active";
    const classNav = active ? "nav" : "nav nav--active";
    
    return(
        <div className="header-container">
            
            <IconBars active={active} setActive={setActive} classIcon={classIcon}/>
            
            <span className="header__title"><Link to="/" className="header__title-link">Ecommerce</Link></span>
            
            <nav className={classNav}>
                <ul className="navbar">
                    <NavItem classItem="navbar__item" link="/category/otoño-invierno" classLink="navbar__link" classIcon="far fa-snowflake navbar__icon" content="Otoño/Invierno"/>
                    <NavItem classItem="navbar__item" link="/category/primavera-verano" classLink="navbar__link" classIcon="fas fa-umbrella-beach navbar__icon" content="Primavera/Verano"/>
                </ul>
            </nav>

            <CartWidget/>
        </div>
    )
};
export default NavBar;