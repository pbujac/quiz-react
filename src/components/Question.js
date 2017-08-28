import React from 'react';
import AnswerList from './AnswerList';
import '../css/Question.css';

const Question = ({index, question}) => {

    return (
        <div className="question">

            <hr className="centered"/>
            <p className="question-text centered">
                <span>{index + 1}.</span>
                {question.text}
            </p>

            <AnswerList answers={question.answers}/>
        </div>
    );
};

export default Question;
