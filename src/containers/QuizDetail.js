import React, {Component} from 'react';
import QuizService from "../models/QuizService";
import {Paper} from "material-ui";
import Question from "../components/Question";

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
        QuizService.getQuizById(this.props.params.id).then(quiz => {
            console.log(quiz.questions);
            this.setState({
                quiz: quiz
            });
        });
    }

    render() {
        return (
            <section className="quiz-detail">

                <Paper zDepth={1} className="large-12 columns card">

                    <h2>{this.state.quiz.title}</h2>
                    <div className="text-underline"/>

                    <div className="category">
                        <p>Category: {this.state.quiz.category.title}</p>
                        <p>Author: {this.state.quiz.author.first_name} {this.state.quiz.author.last_name}</p>
                    </div>

                    <p className="large-9 columns description">Description: {this.state.quiz.description}</p>

                    <h3>Questions</h3>

                    {this.state.quiz.questions.map((question,index) =>
                        <Question key={index} index={index} question={question}/>
                    )}
                </Paper>
            </section>
        );
    }
}

export default QuizDetail;
