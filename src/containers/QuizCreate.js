import React, {Component} from 'react';
import QuizForm from "../components/QuizForm";

class QuizCreate extends Component {

    constructor(props){
        super(props);

        this.processForm = this.processForm.bind(this);
    }

    render() {
        return (
            <QuizForm
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                successMessage={this.state.successMessage}
                quiz={this.state.quiz}
            />
        );
    }
}

export default QuizCreate;
