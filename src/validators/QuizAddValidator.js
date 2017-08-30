export class QuizAddValidator {


    static validateQuiz(quiz, errors) {

        let valid = {
            isValid: true,
            message: ''
        };

        if (!quiz.questions.length > 0) {
            this.setErrorMessage(valid, 'You must specify at least one Question');
        }

        this.validateMinAnswers(quiz, valid);

        return valid;
    }


    static validateMinAnswers(quiz, valid) {

        quiz.questions.map(q => {

            if (!q.answers.length > 0) {
                this.setErrorMessage(valid, 'You must specify at least one Answer');
            }

            return q;
        });
    }

    static setErrorMessage(valid, message) {
        valid.isValid = false;
        valid.message = {summary: message};
    }
}
