import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Home from "./Home";
import QuizDetail from "../containers/QuizDetail";

const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/quiz-detail/:id' component={QuizDetail}/>
    </Switch>
);

export default Routes;
