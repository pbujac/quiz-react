import React, {Component} from 'react';
import {RaisedButton, TextField} from 'material-ui';
import PropTypes from 'prop-types';
import AnswerAdd from './AnswerAdd';
import '../css/QuestionAdd.css'

class QuestionAdd extends Component {

    /**
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            answersArray: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.onAddAnswerBtnClick = this.onAddAnswerBtnClick.bind(this);
    }

    /**
     * @param event
     */
    handleChange = (event) => {

        let field = event.target.name;
        let question = this.props.question;

        question[field] = event.target.value;

        this.setState({question});
    };

    onAddAnswerBtnClick() {

        let answers = this.state.answersArray;
        let question = this.props.question;
        let answer = {
            text: '',
            correct: false
        };

        question.answers.push(answer);

        this.setState({
            answers: answers.push(
                <AnswerAdd key={answers.length} answer={answer}/>
            ),
            question: question
        });
    }

    render() {

        return (
            <div className="question">
                <TextField
                    className="input-form"
                    floatingLabelText="Question Text"
                    name="text"
                    onChange={this.handleChange}
                    value={this.props.question.text}/>

                {this.state.answersArray}

                <RaisedButton label="Add Answer" onClick={this.onAddAnswerBtnClick} primary/>

            </div>
        );
    }
}

QuestionAdd.propTypes = {
    question: PropTypes.object.isRequired
};

export default QuestionAdd;
