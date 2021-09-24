import React from "react";
import './EndQuiz.css';
import Button from "../UI/Button/Button";
const EndQuiz = (props) => {
    let counterOfRigthAnswers = props.countAnswers;
    return(
        <div className="EndQuiz">
            {props.quiz.map((quetion, index)=>{
                const classNames = ["fa"];
                if(props.results[index] === 'wrong'){
                    classNames.push('fa-times');
                    counterOfRigthAnswers--;
                    console.log(props.results)
                }
                else{
                    classNames.push('fa-check');
                    console.log(props.results)
                }
                return(
                    <li key={index}>
                        <strong>{index+1}. </strong>
                        {quetion.answerName}
                        <i className={classNames.join(" ")}></i>
                    </li>
                )
            })}
            <p>Правильных ответов: {counterOfRigthAnswers} из {props.countAnswers}</p>
            <div>
                <Button
                    onClick={props.reboatTest}
                    disabled={false}
                    type="primary"
                >
                    Повторить тест
                </Button>
                <Button
                    disabled={false}
                    type="success"
                >
                    Перейти к списку тестов
                </Button>
            </div>
        </div>
    )
}
export default EndQuiz
