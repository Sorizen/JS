import React from "react";
import './Button.css';
const Button = (props) =>{
    const classes = ["Button"];
    classes.push(props.type);
    return(
        <button onClick={props.onClick} disabled={props.disabled} className={classes.join(" ")}>{props.children}</button>
    )
}
export default Button