import React, {Component} from 'react';
import QuizService from "../models/QuizService";
import {Paper} from "material-ui";
import QuestionList from "../components/QuestionList";

class QuizDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            quiz: {
                category: {},
                author: {
                    first_name: '',
                    last_name: '',
                },
                description: '',
                questions: []
            }
        }

    };

    componentDidMount() {
        console.log(this.props.match.params.id);
        QuizService.getQuizById(this.props.match.params.id).then(quiz => {
            this.setState({
                quiz: quiz
            });
        });
    }

    render() {
        return (
            <section className="quiz-detail">

                <Paper zDepth={1} className="card">

                    <h2>{this.state.quiz.title}</h2>
                    <div className="text-underline"/>

                    <div className="category">
                        <p>Category: {this.state.quiz.category.title}</p>
                        <p>Author: {this.state.quiz.author.first_name} {this.state.quiz.author.last_name}</p>
                    </div>

                    <p className="description">Description: {this.state.quiz.description}</p>


                    <QuestionList questions={this.state.quiz.questions}/>

                </Paper>
            </section>
        );
    }
}

export default QuizDetail;
