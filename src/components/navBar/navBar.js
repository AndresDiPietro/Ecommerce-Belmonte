import React, { useState } from "react";
import NavItem from "./navItems.js";
import IconBars from "../iconBars/iconBars";
import CartWidget from "../cartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [enabled, setEnabled] = useState(true);
    const classIcon = enabled ? "navbar__icon-bars" : "navbar__icon-bars navbar__icon-bars--active";
    const classNav = enabled ? "navbar" : "navbar navbar--active";
    return(
        <div className="header__container">
            <IconBars enabled={enabled} setEnabled={setEnabled} classIcon={classIcon}/>
            <span className="header__title"><Link to="/" className="header__title-link">Ecommerce</Link></span>
            <nav>
                <ul className={classNav}>
                    <NavItem classItem="navbar__item" link="/category/otoño-invierno" classLink="navbar__link" classIcon="fas fa-wrench navbar__icon" content="Otoño/Invierno"/>
                    <NavItem classItem="navbar__item" link="/category/primavera-verano" classLink="navbar__link" classIcon="fas fa-tools navbar__icon" content="Primavera/Verano"/>
                    <CartWidget classItem="navbar__item" link="#" classLink="navbar__link" content="CartWidget"/>
                    {/* <NavItem classItem="navbar__item" link="#" classLink="navbar__link" classIcon="fas fa-hammer navbar__icon" content="Categoría"/> */}
                </ul>
            </nav>
        </div>
    )
};
export default NavBar;