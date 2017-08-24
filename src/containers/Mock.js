import React, {Component} from 'react';
import QuizService from "../models/QuizService";
import QuizDetail from "../components/QuizDetail";

class Mock extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {
        QuizService.getAllQuizzes();
    }

    render() {
        return (
            <QuizDetail/>
        );
    }
}

export default Mock;
