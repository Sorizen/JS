import React, {Component} from "react";
import './Drawer.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
class Drawer extends Component{
    links = [1,2,3]
    render() {
        return(
            <>
                <Backdrop isOpen={this.props.isOpen} onClick={this.props.closeMenu}></Backdrop>
                <nav className={this.props.isOpen ? "Drawer":"Drawer close"}>
                    <ul>
                        {this.links.map((link,index)=>{
                            return(
                                <li key={index}>
                                    <a href="#">{link}</a>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </>
        )
    }
}
export default Drawer