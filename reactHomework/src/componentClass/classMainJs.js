import React, {Component} from "react";
import Result from "../funcComponent/Result/Result";
import './classMain.css'
import {Route} from "react-router-dom";
import NavBar from "../funcComponent/NavBar/NavBar";
import Creators from "../funcComponent/Creators/Creators";
class MainFunctional extends Component {
    state = {
        inputText: '',
        clicked: false,
        navs: ["Home", "Info"],
    }
    inputChange = (event) =>{
        this.setState({
            inputText: event.target.value,
            clicked: false
        })
    }
    functionAll = (textInput) => {
        const textInputSplit = textInput.split("").sort();
        let counts = {};
        textInputSplit.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
        });
        let entries = Object.entries(counts);
        let sorted = entries.sort((a, b) => a[1] - b[1]);
        return sorted
    }
    render() {
        return(
            <>
                <nav className="Nav">
                    <ul>
                        <NavBar navs={this.state.navs}/>
                    </ul>
                </nav>
                <Route exact path={"/"+this.state.navs[0]} render={()=>{
                    return(
                        <div>
                            <div className="d2">
                                <input onChange={(event)=>{this.inputChange(event)}} type="text" placeholder="Введите текст..."/>
                                <button onClick={()=>this.setState({clicked:true})}>➜</button>
                            </div>
                            {this.state.clicked
                                ?
                                <Result functionAll={()=>this.functionAll(this.state.inputText)}></Result>
                                :
                                <div className='textWithoutResult'>When you finish entering new text, don`t forget to click on the button to get the result 😎</div>
                            }
                        </div>
                    )
                }}/>
                <Route exact path={"/"+this.state.navs[1]} component={Creators}/>
            </>
        )
    }
}
export default MainFunctional