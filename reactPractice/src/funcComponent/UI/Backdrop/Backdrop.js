import React from "react";
import './Backdrop.css'
const Backdrop = props =>{
    return(
        <div className={props.isOpen ? "Backdrop":"Backdrop close"} onClick={props.onClick}>

        </div>
    )
}
export default Backdrop