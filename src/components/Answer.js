import React from 'react';
import '../css/Answer.css';

const Answer = (props) => {

    const {answer} = this.props;

    let checkCorrectAnswer = () => {
        return answer.correct
            ? <i className="material-icons correct">done</i>
            : <i className="material-icons incorrect">clear</i>
    };

    return (
        <div className="answer">
            <p>{checkCorrectAnswer()} {answer.text}</p>
        </div>
    );
};

export default Answer;
