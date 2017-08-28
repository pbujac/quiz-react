import React from 'react';
import Answer from './Answer';
import '../css/AnswerList.css';

const AnswerList = (props) => {

    const {answers} = this.props;

    return (
        <div className="answer-list centered">
            {answers.map(answer =>
                <Answer key={answer.id} answer={answer}/>
            )}
        </div>
    );
};

export default AnswerList;
