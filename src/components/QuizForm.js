import React from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";
import PropTypes from 'prop-types';
import '../css/QuizForm.css'
import CategoryListSelect from "../containers/CategoryListSelect";

const QuizForm = ({onSubmit, onChange, errors, successMessage, quiz, categories}) => {

    return (
        <section className="quiz-detail">

            <Paper zDepth={1} className='card'>

                <form action="/" onSubmit={onSubmit} className="form">
                    <h2>Create Quiz</h2>
                    <div className='text-underline'/>

                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errors.summary && <p className="error-message">{errors.summary}</p>}

                    <TextField
                        className="input-form"
                        floatingLabelText="Title"
                        name="title"
                        errorText={errors.title}
                        onChange={onChange}
                        value={quiz.title}/>

                    <TextField
                        className="input-form"
                        floatingLabelText="Description"
                        name="description"
                        onChange={onChange}
                        errorText={errors.description}
                        value={quiz.description}/>

                    <CategoryListSelect onChange={onChange} categories={categories}/>

                    <br/>

                    <RaisedButton type="submit" label="Create Quiz" className="btn" primary/>
                </form>

            </Paper>
        </section>
    );
};

QuizForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    successMessage: PropTypes.string.isRequired,
    quiz: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
};

export default QuizForm;
