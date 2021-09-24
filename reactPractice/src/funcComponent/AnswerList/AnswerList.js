import React  from "react";
import './AnswerList.css'
import AnswerItem from "./AnswerItem/AnswerItem";
const AnswerList = props =>{
    return(
        <ul className="AnswersList">
            {props.quizArr.map((quiz, index)=>{
                return(
                    <AnswerItem
                        onClickAnswer={props.onClickAnswer}
                        answerText = {quiz.answerText}
                        answerId = {quiz.id}
                        answerRight = {quiz.answerRight}
                        key = {index}
                        activeQuetionWrongOrGood = {props.activeQuetionWrongOrGood ? props.activeQuetionWrongOrGood[quiz.id] : null}
                    />
                )
            })}
        </ul>
    )
}
export default AnswerList