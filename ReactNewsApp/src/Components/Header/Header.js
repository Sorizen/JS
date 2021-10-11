import React, {useEffect, useState} from "react";
import './Header.css';
import DropDown from "../UI/DropDown/DropDown";
import {NavLink, useHistory} from "react-router-dom";
import CLearSearch from "../UI/ClearSearch/CLearSearch";

const Header = (props) =>{
    const [DropDownIsActive, setDropDownIsActive] = useState(false);
    const [SearchValue, setSearchValue] = useState('');
    const history = useHistory();
    const routeChange = () =>{
        let path = `/`;
        history.push(path);
    }
    useEffect(() => {
        props.setMainPageInput('');
        const listener = event => {
            if ((event.code === "Enter" || event.code === "NumpadEnter") && SearchValue !== '') {
                props.setMainPageInput(SearchValue);
                routeChange();
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [SearchValue]);
    const DropDownActive = () =>{
        setDropDownIsActive(true)
    }
    const DropDownHidden = () =>{
        setDropDownIsActive(false)
    }
    return(
        <header>
            <div className={'Header'}>
                <NavLink to={'/'} className="news-app-text">News app</NavLink>
                <div className="Search">
                    <NavLink to={'/'} onClick={()=>props.setMainPageInput(SearchValue)} >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
                        </svg>
                    </NavLink>
                    <input id={'text_field'} type="text" value={SearchValue} placeholder="Type something to start search" onChange={(event)=> setSearchValue(event.target.value)}/>
                    {SearchValue === '' ? null : <CLearSearch setSearchValue = {setSearchValue}/>}
                </div>
                <div className={props.BurgerActive ? "burger-button active" : "burger-button"} onClick={()=>props.setBurgerActive(!props.BurgerActive)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={props.BurgerActive ? 'burger-content' : 'burger-content hidden'}>
                    <span onMouseOver={DropDownActive} onMouseOut={DropDownHidden}>Categories <span></span></span>
                    <NavLink to={'/'} onClick={()=>{props.setActiveNewsFromServer({}); props.setStateChange(!props.StateChange)}}>⚡ Trending news</NavLink>
                </div>
                <DropDown
                    setStateChange = {props.setStateChange}
                    StateChange = {props.StateChange}
                    DropDownActive={DropDownActive}
                    DropDownHidden={DropDownHidden}
                    setDropDownActiveCategory = {props.setDropDownActiveCategory}
                    DropDownIsActive = {DropDownIsActive}
                />
            </div>
        </header>
    )
}
export default Header
