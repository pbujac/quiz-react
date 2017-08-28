import React, {Component} from 'react';
import QuizForm from "../components/QuizForm";
import CategoryService from "../models/CategoryService";

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
                category: {
                    id: ''
                }
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeQuiz = this.changeQuiz.bind(this);
    }

    /**
     * @param event
     */
    processForm(event) {

        event.preventDefault();

        console.log(this.state.quiz);

        // POST ACTION ...
    }

    /**
     * @param event
     */
    changeQuiz(event) {

        const field = event.target.name;
        const quiz = this.state.quiz;
        quiz[field] = event.target.value;
        this.setState({
            quiz
        });

        console.log(this.state.quiz);
    }

    componentDidMount() {

        CategoryService.getAllCategories().then(categories => {
            this.setState({
                categories: categories
            });
        });
    }

    render() {

        return (
            <QuizForm
                onSubmit={this.processForm}
                onChange={this.changeQuiz}
                errors={this.state.errors}
                successMessage={this.state.successMessage}
                quiz={this.state.quiz}
                categories={this.state.categories}/>
        );
    }
}

export default QuizCreate;
