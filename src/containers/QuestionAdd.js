import React, {Component} from 'react';
import {RaisedButton} from 'material-ui';
import PropTypes from 'prop-types';
import {TextValidator} from "react-material-ui-form-validator";
import AnswerAdd from './AnswerAdd';
import '../css/QuestionAdd.css'


class QuestionAdd extends Component {

    /**
     * @param props
     */
    constructor(props) {
        super(props);

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

        let question = this.props.question;
        let answer = {
            text: '',
            correct: false
        };

        question.answers.push(answer);

        this.setState({question: question});
    }

    render() {
        let question = this.props.question;

        return (
            <div className="question">
                <TextValidator
                    className="input-form"
                    floatingLabelText="Question Text"
                    name="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    onChange={this.handleChange}
                    value={question.text}/>

                {question.answers.map((answer, index) =>
                    <AnswerAdd key={index} answer={answer}/>
                )}

                <RaisedButton label="Add Answer" onClick={this.onAddAnswerBtnClick} primary/>

            </div>
        );
    }
}

QuestionAdd.propTypes = {
    question: PropTypes.object.isRequired
};

export default QuestionAdd;
