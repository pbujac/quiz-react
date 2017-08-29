import React, {Component} from 'react';
import QuizForm from "../components/QuizForm";
import CategoryService from "../models/CategoryService";
import QuestionAdd from "./QuestionAdd";
import QuizService from "../models/QuizService";

class QuizCreate extends Component {

    /**
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            successMessage: '',
            categories: [],
            quiz: {
                title: '',
                description: '',
                questions: [],
                category: {
                    id: ''
                }
            },
            questionsArray: []
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

        let isValid = this.validateQuiz(this.state.quiz);

        if (isValid) {

            QuizService.saveQuiz(this.state.quiz).then((response) => {
                    this.props.history.replace('/');
                }
            ).catch(error => {
                this.setErrorMessage(error.response.data.details.title.message);
            });
        }

    }

    validateQuiz(quiz) {

        if (!quiz.questions.length > 0) {
            this.setErrorMessage('You must specify at least one Question');

            return false;
        } else {
            quiz.questions.map(q => {
                if (!q.answers.length > 0) {
                    this.setErrorMessage('You must specify at least one Answer');
                }
            });
        }

        return true;
    }

    setErrorMessage(message) {
        this.setState({errors: {summary: message}});
    }

    onAddQuestionBtnClick() {

        let questions = this.state.questionsArray;
        let quiz = this.state.quiz;
        let question = {
            text: '',
            answers: []
        };

        quiz.questions.push(question);


        this.setState({
            questions: questions.push(
                <QuestionAdd key={questions.length} question={question}/>
            ),
            quiz: quiz
        });
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

        return (
            <QuizForm
                onSubmit={this.processForm}
                onChange={this.changeQuiz}
                onAddQuestionBtnClick={this.onAddQuestionBtnClick}
                errors={this.state.errors}
                successMessage={this.state.successMessage}
                quiz={this.state.quiz}
                categories={this.state.categories}
                questions={this.state.questionsArray}/>
        );
    }
}

export default QuizCreate;
