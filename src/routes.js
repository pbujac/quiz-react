import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from "./components/common/App";
import Home from "./components/Home";
import QuizDetail from "./containers/QuizDetail";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="quiz-detail/:id" component={QuizDetail}/>
    </Route>
);

