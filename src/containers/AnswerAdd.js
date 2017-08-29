import React, {Component} from 'react';
import {Checkbox, TextField} from 'material-ui';
import PropTypes from 'prop-types';
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

        this.setState({
            answer
        });
    };

    updateCheck() {
        this.setState((oldState) => {
            this.props.answer.correct = !oldState.checked;
        });
    }

    render() {
        return (
            <div>
                <div className="answer">
                    <TextField
                        className="input-form"
                        floatingLabelText="Answer Text"
                        name="text"
                        onChange={this.handleChange}
                        value={this.props.answer.text}/>

                    <Checkbox
                        label="Correct"
                        checked={this.props.answer.correct}
                        onCheck={this.updateCheck.bind(this)}/>
                </div>
            </div>
        );
    }
}

AnswerAdd.propTypes = {
    answer: PropTypes.object.isRequired
};

export default AnswerAdd;
