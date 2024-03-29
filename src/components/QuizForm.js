import React from 'react';
import {Paper, RaisedButton} from "material-ui";
import PropTypes from 'prop-types';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import CategoryListSelect from "../containers/CategoryListSelect";
import '../css/QuizForm.css'
import QuestionAdd from "../containers/QuestionAdd";

const QuizForm = ({
                      onSubmit,
                      onChange,
                      onAddQuestionBtnClick,
                      errors,
                      quiz,
                      categories
                  }) => {

    return (
        <section className="quiz-detail">

            <Paper zDepth={1} className='card'>

                <ValidatorForm onSubmit={onSubmit} className="form">
                    <h2>Create Quiz</h2>
                    <div className='text-underline'/>

                    {errors && <p className="error-message">{errors.summary}</p>}

                    <TextValidator
                        className="input-form"
                        floatingLabelText="Title"
                        name="title"
                        validators={['required']}
                        errorMessages={['This field is required']}
                        errorText={errors.title}
                        onChange={onChange}
                        value={quiz.title}/>

                    <TextValidator
                        className="input-form"
                        floatingLabelText="Description"
                        name="description"
                        validators={['required']}
                        errorMessages={['This field is required']}
                        onChange={onChange}
                        errorText={errors.description}
                        value={quiz.description}/>

                    <CategoryListSelect onChange={onChange} categories={categories} quiz={quiz}/>

                    {quiz.questions.map((question, index) =>
                        <QuestionAdd key={index} question={question}/>
                    )}

                    <RaisedButton label="Add Question" onClick={onAddQuestionBtnClick} className="btn-left btn-answer"
                                  primary/>
                    <br/>

                    <RaisedButton type="submit" label="Create Quiz" className="btn btn-submit" primary/>

                </ValidatorForm>

            </Paper>
        </section>
    );
};

QuizForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    quiz: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
};

export default QuizForm;
