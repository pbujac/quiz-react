import React from 'react';
import Question from './Question';

const QuestionList = ({questions}) => {

    return (
        <div>
            <h3>Questions</h3>
            <div className="centered">

                {questions.map((question, index) =>
                    <Question key={index} index={index} question={question}/>
                )}

            </div>
        </div>
    );
};

export default QuestionList;
