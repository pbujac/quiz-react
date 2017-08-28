import React from 'react';
import AnswerList from "./AnswerList";

const Question = (props) => {
    return (
        <div className="question">

            <hr className="centered"/>
                <p className="question-text centered">
                    <span>{props.index + 1}.</span>
                    {props.question.text}
                </p>

                <AnswerList answers={props.question.answers}/>
        </div>
    );
};

export default Question;
