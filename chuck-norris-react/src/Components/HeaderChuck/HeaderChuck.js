import React, {useEffect, useState} from "react";
import './HeaderChuck.css';
import axios from "axios";
const HeaderChuck = (props) =>{
    const [ChuckImg, setChuckImg] = useState('');
    useEffect(()=>{
        getImgFromServer();
    },[])
    const getImgFromServer = async () =>{
        const link = await axios.get('https://api.chucknorris.io/jokes/random');
        setChuckImg(link.data.icon_url);
    }
    return(
        <header>
            <div>
                <img src={ChuckImg} alt=""/>
                <span>Chuck Norris</span>
            </div>
        </header>
    )
}
export default HeaderChuck