import React, {Component} from 'react';
import {Checkbox} from 'material-ui';
import PropTypes from 'prop-types';
import {TextValidator} from "react-material-ui-form-validator";
import '../css/AnswerAdd.css'


class AnswerAdd extends Component {

    /**
     * @param props
     */
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * @param event
     */
    handleChange = (event) => {

        let field = event.target.name;
        let answer = this.props.answer;

        answer[field] = event.target.value;

        this.setState({answer});
    };

    updateCheck() {
        this.setState((oldState) => {
            this.props.answer.correct = !oldState.checked;
        });
    }

    render() {
        let answer = this.props.answer;

        return (
            <div className="answer">
                <TextValidator
                    className="input-form"
                    floatingLabelText="Answer Text"
                    name="text"
                    validators={['required']}
                    errorMessages={['This field is required']}
                    onChange={this.handleChange}
                    value={answer.text}/>

                <Checkbox
                    label="Correct"
                    checked={answer.correct}
                    onCheck={this.updateCheck.bind(this)}/>
            </div>
        );
    }
}

AnswerAdd.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerAdd;
