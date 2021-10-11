import React from "react";
import './ClearSearch.css';
const CLearSearch = (props) =>{
    return(
        <div className={'ClearSearch'} onClick={()=>props.setSearchValue('')}>
            clear
        </div>
    )
}
export default CLearSearch