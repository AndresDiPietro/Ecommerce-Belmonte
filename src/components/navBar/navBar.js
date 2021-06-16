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

    const categories = [
        {category:'otoño-invierno', link:'/category/otoño-invierno', classIcon:'far fa-snowflake navbar__icon', content:'Otoño/Invierno'},{category:'primavera-verano', link:'/category/primavera-verano', classIcon:'fas fa-umbrella-beach navbar__icon', content:'Primavera/Verano'}
    ]
    
    return(
        <div className="header-container">
            
            <IconBars active={active} setActive={setActive} classIcon={classIcon}/>
            
            <span className="header__title"><Link to="/" className="header__title-link">Ecommerce</Link></span>
            
            <nav className={classNav}>
                <ul className="navbar">
                    {categories.map(e=> <NavItem key={e.category} link={`/category/${e.category}`} classIcon={e.classIcon} content={e.content} />)}
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
};
export default NavBar;