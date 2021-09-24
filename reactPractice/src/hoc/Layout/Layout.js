import React, {Component} from "react";
import './Layout.css';
import MenuToggle from "../../funcComponent/navigation/componentMenuToggle/MenuToggle";
import Drawer from "../../funcComponent/navigation/Drawer/Drawer";
class Layout extends Component{
    state = {
        menu: false
    }
    toggleMenuHandler = () =>{
       this.setState({
           menu: !this.state.menu
       })
    }
    render() {
        return(
            <div className="Layout">
                <Drawer isOpen={this.state.menu} closeMenu={this.toggleMenuHandler}></Drawer>
                <MenuToggle
                    onClickToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}
export default Layout