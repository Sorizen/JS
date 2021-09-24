import React from "react";
import './activeQuiz.css'
import AnswerList from "./AnswerList/AnswerList";
const ActiveQuiz = (props) =>{
    return(
        <div className="ActiveQuiz">
            <p className="Question">
                <span>
                    <strong>{props.activeQuetion + 1}. </strong>
                    {props.answerName}
                </span>
                <small>{props.activeQuetion + 1} из {props.quetionsLength}</small>
            </p>
            <AnswerList
                quizArr = {props.quizArr[props.activeQuetion].answers}
                onClickAnswer = {props.onClickAnswer}
                activeQuetionWrongOrGood = {props.activeQuetionWrongOrGood}
            />
        </div>
    )
}
export default ActiveQuiz