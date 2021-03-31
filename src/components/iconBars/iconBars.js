import React from "react";
import "./iconbars.css";

const IconBars = ({classIcon, active, setActive}) => {

    return(
        <div className="navbar__icon-container" onClick={()=> setActive(!active)}>
            <span className={classIcon}/>
        </div>
    )
}
export default IconBars;