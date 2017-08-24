import React from 'react';
import {Route, IndexRoute} from 'react-router';
import QuizDetail from "./components/QuizDetail";
import App from "./components/common/App";
import Home from "./components/Home";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="quiz-detail" component={QuizDetail}/>
    </Route>
);

