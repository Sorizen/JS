import React, {Component} from "react";
import ActiveQuiz from "../../funcComponent/activeQuiz";
import './Quiz.css'
import EndQuiz from "../../funcComponent/EnqQuiz/EndQuiz";
class Quiz extends Component {
    state = {
        isFinished: false,
        activeQuetion: 0,
        activeQuetionWrongOrGood: null,
        results: {}, // [numOfQuetion] : wrong/success
        quiz: [
            {
                answerName: 'Какого цвета небо?',
                answerRight: 2,
                answers: [
                    {answerText: "Чёрное", id : 1},
                    {answerText: "Синее", id : 2},
                    {answerText: "Желтое", id : 3},
                    {answerText: "Красное", id : 4},
                ]
        },
            {
                answerName: 'В каком году родился Т.Г. Шевченко?',
                answerRight: 3,
                answers: [
                    {answerText: "1912", id : 1},
                    {answerText: "1840", id : 2},
                    {answerText: "1814", id : 3},
                    {answerText: "1824", id : 4},
                ]
            },
        ]
    }
    returnTest = () =>{
        this.setState({
            isFinished: false,
            activeQuetion: 0,
            results: {},
            activeQuetionWrongOrGood: null,
        })
    }
    onClickAnswer = (answerId) => {
        let results = this.state.results;
        if(this.state.activeQuetionWrongOrGood){
            const key = Object.keys(this.state.activeQuetionWrongOrGood)[0];
            if(key === 'Green'){
                return
            }
        }
        if (answerId === this.state.quiz[this.state.activeQuetion].answerRight) {
            if(results[this.state.activeQuetion] !== 'wrong'){
                results[this.state.activeQuetion] = 'right';
            }
            this.setState({
                activeQuetionWrongOrGood:{[answerId]:"Green"},
                results
            })
            const timeout = window.setTimeout(() => {
                if (this.state.quiz.length === this.state.activeQuetion + 1) {
                    this.setState({
                        activeQuetionWrongOrGood: null,
                        isFinished: true,
                    })
                } else {
                    this.setState({
                        activeQuetion: this.state.activeQuetion + 1,
                        activeQuetionWrongOrGood: null,
                    })
                }
                window.clearTimeout(timeout);
            }, 1000)
        } else {
            results[this.state.activeQuetion] = 'wrong';
            this.setState({
                activeQuetionWrongOrGood: {[answerId]:"Red"},
                results
            })
        }
    }
    render() {
        return(
            <div className="Quiz">
                <div className="ActiveQuizWrapper">
                    <h1>Quiz</h1>
                    {this.state.isFinished ?
                        <EndQuiz
                            countAnswers = {this.state.quiz.length}
                            results = {this.state.results}
                            quiz = {this.state.quiz}
                            reboatTest = {this.returnTest}
                        />
                        :
                        <ActiveQuiz
                        quizArr = {this.state.quiz}
                        answerName = {this.state.quiz[this.state.activeQuetion].answerName}
                        onClickAnswer={this.onClickAnswer}
                        activeQuetion = {this.state.activeQuetion}
                        quetionsLength = {this.state.quiz.length}
                        activeQuetionWrongOrGood = {this.state.activeQuetionWrongOrGood}
                    />}
                </div>
            </div>
        )
    }
}
export default Quiz