import React, {Component} from 'react';
import QuizForm from "../components/QuizForm";
import CategoryService from "../models/CategoryService";
import QuizService from "../models/QuizService";
import {QuizAddValidator} from "../validators/QuizAddValidator";

class QuizCreate extends Component {

    /**
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            categories: [],
            quiz: {
                title: '',
                description: '',
                questions: [],
                category: {
                    id: ''
                }
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeQuiz = this.changeQuiz.bind(this);
        this.onAddQuestionBtnClick = this.onAddQuestionBtnClick.bind(this);
    }

    /**
     * @param event
     */
    processForm(event) {

        event.preventDefault();

        let validForm = QuizAddValidator.validateQuiz(this.state.quiz, this.state.errors);

        if (validForm.isValid) {
            this.saveQuiz();
        } else {
            this.setErrorMessage(validForm.message.summary)
        }

    }

    saveQuiz() {
        QuizService.saveQuiz(this.state.quiz).then((response) => {
                this.props.history.replace('/');
            }
        ).catch(error => {
            if (error.response.data.details.title.message) {
                this.setErrorMessage(error.response.data.details.title.message);
            }
        });
    }

    /**
     * @param message
     */
    setErrorMessage(message) {
        this.setState({errors: {summary: message}});
    }

    onAddQuestionBtnClick() {

        let quiz = this.state.quiz;
        let question = {
            text: '',
            answers: []
        };

        quiz.questions.push(question);

        this.setState({quiz: quiz});
    }


    /**
     * @param event
     */
    changeQuiz(event) {

        let field = event.target.name;
        let quiz = this.state.quiz;

        quiz[field] = event.target.value;

        this.setState({quiz});
    }

    componentDidMount() {

        CategoryService.getAllCategories().then(categories => {
            this.setState({categories: categories});
        });
    }

    render() {
        let quizForm = this.state;

        return (
            <QuizForm
                onSubmit={this.processForm}
                onChange={this.changeQuiz}
                onAddQuestionBtnClick={this.onAddQuestionBtnClick}
                errors={quizForm.errors}
                quiz={quizForm.quiz}
                categories={quizForm.categories}/>
        );
    }
}

export default QuizCreate;
