import React from "react";
import "./iconbars.css";

const IconBars = ({classIcon, enabled, setEnabled}) => {

    return(
        <div className="navbar__icon-container" onClick={()=> setEnabled(!enabled)}>
            <span className={classIcon}/>
        </div>
    )
}
export default IconBars;