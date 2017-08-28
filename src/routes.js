import React from 'react';
import App from "./components/common/App";
import Home from "./components/Home";
import QuizDetail from "./containers/QuizDetail";
import {Route} from "react-router";

export default (

        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="quiz-detail/:id" component={QuizDetail}/>
        </Route>
);

