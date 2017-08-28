import React from 'react';
import Question from "./Question";

const QuestionList = (props) => {

    return (
        <div>
            <h3>Questions</h3>
            <div className="answer-list large-5 medium-12 small-12 columns centered">

                {props.questions.map((question, index) =>
                    <Question key={index} index={index} question={question}/>
                )}

            </div>
        </div>
    );
};

export default QuestionList;
