import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = (props) => {
    return (
        props.navs.map((nav, index) => {
            return (
                <li key={index} className={"li-"+index}>
                    <NavLink to={`/${nav}`} exact>{nav}</NavLink>
                </li>
            )
        })
    )
}
export default NavBar