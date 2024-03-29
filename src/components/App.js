import React from 'react';
import {Route} from 'react-router-dom';
import Header from './Common/Header';
import Footer from './Common/Footer';
import Home from './Home';
import QuizDetail from '../containers/QuizDetailPage';
import QuizCreate from "../containers/QuizCreate";
import '../css/App.css';

const App = () => (
    <div className="App">
        <Header/>
        <Route exact path='/' component={Home}/>
        <Route path='/quiz-detail/:id' component={QuizDetail}/>
        <Route path='/quiz-create' component={QuizCreate}/>
        <Footer/>
    </div>
);

export default App;
