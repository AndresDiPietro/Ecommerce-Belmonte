import React, { useState } from "react";
import ItemListContainer from "./navItems.js";
import IconBars from "./iconBars/iconBars";

import "./navbar.css";

const NavBar = () => {
    const [enabled, setEnabled] = useState(true);
    const classIcon = enabled ? "navbar__icon-bars" : "navbar__icon-bars navbar__icon-bars--active";
    const classNav = enabled ? "navbar" : "navbar navbar--active";
    return(
        <div className="header__container">
            <IconBars enabled={enabled} setEnabled={setEnabled} classIcon={classIcon}/>
            <span className="title">Ecommerce</span>
        <nav>
            <ul className={classNav}>
                <ItemListContainer classItem="navbar__item" link="#" classLink="navbar__link" classIcon="fas fa-wrench navbar__icon" content="Categoría"/>
                <ItemListContainer classItem="navbar__item" link="#" classLink="navbar__link" classIcon="fas fa-tools navbar__icon" content="Categoría"/>
                <ItemListContainer classItem="navbar__item" link="#" classLink="navbar__link" classIcon="fas fa-hammer navbar__icon" content="Categoría"/>
            </ul>
        </nav>
        </div>
    )
};

export default NavBar;