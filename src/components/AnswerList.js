import React from 'react';
import Answer from "./Answer";

const AnswerList = (props) => {

    return (
        <div className="answer-list large-5 medium-12 small-12 columns centered">
            {props.answers.map(answer =>
                <Answer key={answer.id} answer={answer}/>
            )}
        </div>
    );
};

export default AnswerList;
