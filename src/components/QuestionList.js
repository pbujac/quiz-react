import React from 'react';
import Question from './Question';

const QuestionList = (props) => {

    return (
        <div>
            <h3>Questions</h3>
            <div className="centered">

                {props.questions.map((question, index) =>
                    <Question key={index} index={index} question={question}/>
                )}

            </div>
        </div>
    );
};

export default QuestionList;
