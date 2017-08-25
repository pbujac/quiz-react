import React from 'react';

const Answer = (props) => {


    let checkCorrectAnswer = () => {
        return props.answer.correct
            ? <i className="material-icons correct">done</i>
            : <i className="material-icons incorrect">clear</i>
    };

    return (
        <div className="answer">
            <p>{checkCorrectAnswer()} {props.answer.text}</p>
        </div>
    );
};

export default Answer;
