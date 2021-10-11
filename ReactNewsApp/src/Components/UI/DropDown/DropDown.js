import React from "react";
import './DropDown.css';
import {NavLink} from "react-router-dom";

const DropDown = (props) =>{
    const dropDownCategories = ['Sport', 'World', 'Covid', 'Business', 'Politics', 'Science', 'Religion', 'Health'];
    return(
        <div className={props.DropDownIsActive ? 'dropdown' : 'dropdown hidden'} onMouseOver={props.DropDownActive} onMouseOut={props.DropDownHidden}>
            {dropDownCategories.map((category, index)=>{
                let align = index < 4 ? 'left' : 'right';
                return(
                    <NavLink to={'/'} key={index} className={`DropDownItem DropDownItem-${align}`} onClick={()=>{props.setDropDownActiveCategory(category);props.setStateChange(!props.StateChange)}}>
                        {category}
                    </NavLink>
                )
            })}
        </div>
    )
}
export default DropDown