import React from "react";
import './CategoriesChuck.css';
const CategoriesChuck = (props) =>{
    let classNameForItem = ["category-item"];
    return(
        <div className="categories-wrapper">
            <h1>Categories</h1>
            <div className="category-items-wrapper">
                {props.categories ? props.categories.map((category, index)=>{
                    if(category === 'religion'){
                        classNameForItem.push("category-item-margin-left");
                    }
                    else if (category === 'random'){
                        classNameForItem.push("category-item-margin-right");
                    }
                    else{
                        classNameForItem = ["category-item"];
                    }
                    return(
                        <div className={classNameForItem.join(' ')} key={index} onClick={()=>{
                            props.setSwitcher(!props.Switcher);
                            props.setActiveCategory(category);
                        }}>
                            {category}
                        </div>
                    )
                }): null}
            </div>
        </div>
    )
}
export default CategoriesChuck