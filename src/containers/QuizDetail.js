import React, {Component} from 'react';
import QuizService from '../models/QuizService';
import {Paper} from 'material-ui';
import QuestionList from '../components/QuestionList';
import '../css/QuizDetail.css';

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

        QuizService.getQuizById(this.props.match.params.id).then(quiz => {
            this.setState({
                quiz: quiz
            });
        });
    }

    render() {

        const {quiz} = this.state;

        return (
            <section className="quiz-detail">

                <Paper zDepth={1} className='card'>

                    <h2>{quiz.title}</h2>
                    <div className='text-underline'/>

                    <div className="category">
                        <p>Category: {quiz.category.title}</p>
                        <p>Author: {quiz.author.first_name} {quiz.author.last_name}</p>
                    </div>

                    <p className="description">Description: {quiz.description}</p>

                    <QuestionList questions={quiz.questions}/>

                </Paper>
            </section>
        );
    }
}

export default QuizDetail;
