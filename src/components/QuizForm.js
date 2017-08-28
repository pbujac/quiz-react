import React from 'react';
import {Paper, RaisedButton, TextField} from "material-ui";
import PropTypes from 'prop-types';

const QuizForm = ({
                      onSubmit,
                      onChange,
                      errors,
                      successMessage,
                      quiz
                  }) => {

    return (
        <section className="quiz-detail">

            <Paper zDepth={1} className='card'>

                <form action="/" onSubmit={onSubmit}>
                    <h2 className="card-heading">Login</h2>

                    {successMessage && <p className="success-message">{successMessage}</p>}
                    {errors.summary && <p className="error-message">{errors.summary}</p>}

                    <TextField
                        floatingLabelText="Title"
                        name="title"
                        errorText={errors.title}
                        onChange={onChange}
                        value={quiz.title}
                    />

                    <TextField
                        floatingLabelText="Description"
                        name="description"
                        onChange={onChange}
                        errorText={errors.description}
                        value={quiz.description}
                    />

                    <RaisedButton type="submit" label="Create Quiz" primary/>
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
    quiz: PropTypes.object.isRequired
};

export default QuizForm;
