import React, {Component} from "react";
import './Drawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";
const links = [
    {to: '/', label: 'Список вопросов', exact: true},
    {to: '/auth', label: 'Авторизация', exact: false},
    {to: '/quiz-creator', label: 'Создать тест', exact: false}
]
class Drawer extends Component{
    renderLinks = () =>{
        return(
            links.map((link,index)=>{
                return(
                    <li key={index}>
                        <NavLink
                            to={link.to}
                            exact={link.exact}
                            activeClassName="active"
                            onClick={this.props.closeMenu}
                        >
                            {index+1}. {link.label}
                        </NavLink>
                    </li>
                )
            })
        )
    }
    render() {
        return(
            <>
                <Backdrop isOpen={this.props.isOpen} onClick={this.props.closeMenu}></Backdrop>
                <nav className={this.props.isOpen ? "Drawer":"Drawer close"}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
            </>
        )
    }
}
export default Drawer