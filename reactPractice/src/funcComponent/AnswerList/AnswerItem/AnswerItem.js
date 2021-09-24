import React from "react";
import './AnswerItem.css'
const AnswerItem = props =>{
    const classArr = ["AnswerItem"];
    if(props.activeQuetionWrongOrGood){
        console.log(classArr.push(props.activeQuetionWrongOrGood))
    }
    return(
        <li className={classArr.join(' ')} onClick={()=>props.onClickAnswer(props.answerId)}>
            {props.answerText}
        </li>
    )
}
export default AnswerItem