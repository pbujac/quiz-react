import React from 'react';
import AnswerList from "./AnswerList";

const Question = (props) => {

    return (
        <div className="question">

            <hr className="large-12 columns centered"/>

            <div className="row">
                <p className="question-text large-5 medium-12 small-12 columns centered">
                    <span>{props.index + 1}.</span>
                    {props.question.text}
                </p>
                <AnswerList answers={props.question.answers}/>
            </div>
        </div>
    );
};

export default Question;
