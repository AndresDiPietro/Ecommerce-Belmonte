import React, { useEffect, useState } from "react";
import NavItem from "./navItems.js";
import IconBars from "../iconBars/iconBars";
import CartWidget from "../cartWidget";
import "./navbar.css";
import { Link} from "react-router-dom";

const NavBar = () => {

    const [active, setActive] = useState(true);
    
    const classIcon = active ? "navbar__icon-bars" : "navbar__icon-bars navbar__icon-bars--active";
    const classNav = active ? "nav" : "nav nav--active";
    
    const [keyword, setKeyword] = useState("");
    const handleSubmit = evt => {   
        evt.preventDefault()
        console.log(keyword)
    }
    const handleChange = evt => {
        setKeyword(evt.target.value)
    }
    useEffect(()=>{

    })
    return(
        <div className="header-container">
            <IconBars active={active} setActive={setActive} classIcon={classIcon}/>
            <span className="header__title"><Link to="/" className="header__title-link">Ecommerce</Link></span>
            
            <form className="header__search" onSubmit={handleSubmit}>
                <input className="header__search-input" placeholder="Buscar producto" onChange={handleChange} type="text" value={keyword} />
            </form>
            
            <span className="header__cart"><Link to='/cart' className=""><i className="fab fa-opencart navbar__icon icon-cart"></i></Link></span>
            <nav className={classNav}>
                <ul className="navbar">
                    <NavItem classItem="navbar__item" link="/category/otoño-invierno" classLink="navbar__link" classIcon="fas fa-wrench navbar__icon" content="Otoño/Invierno"/>
                    <NavItem classItem="navbar__item" link="/category/primavera-verano" classLink="navbar__link" classIcon="fas fa-tools navbar__icon" content="Primavera/Verano"/>
                    <CartWidget classItem="navbar__item cart-Widget" link="#" classLink="navbar__link" content=""/>
                </ul>
            </nav>
        </div>
    )
};
export default NavBar;