import React, {Component} from "react";
import Layout from "./hoc/Layout/Layout";
import Quiz from "./classComponent/Quiz/Quiz";
import Auth from "./classComponent/Auth/Auth";
import QuizCreator from "./classComponent/QuizCreator/QuizCreator";
import QuizList from "./classComponent/QuizList/QuizList";
import {Route, Switch} from "react-router-dom";
import './index.css'
class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/auth" component={Auth}></Route>
                <Route path="/quiz-creator" component={QuizCreator}></Route>
                <Route path="/quiz/:id" component={Quiz}></Route>
                <Route path="/" component={QuizList}></Route>
            </Switch>
        </Layout>
    );
  }
}
export default App;
