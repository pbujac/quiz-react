import React from 'react';
import Answer from "./Answer";

const AnswerList = (props) => {

    return (
        <div className="answer-list centered">
            {props.answers.map(answer =>
                <Answer key={answer.id} answer={answer}/>
            )}
        </div>
    );
};

export default AnswerList;
