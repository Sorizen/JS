import React from "react";
import './JokesChuck.css';
import ChuckImg from './img.png';
const JokesChuck = (props) =>{
    return(
        <div className="Jokes-Wrapper">
            <img src={ChuckImg} alt=""/>
            <div className="Joke">
                {props.ActiveJoke}
            </div>
        </div>
    )
}
export default JokesChuck