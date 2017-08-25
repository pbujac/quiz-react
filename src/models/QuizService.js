import api from '../api/api.service';

class QuizService {

    static getAllQuizzes() {
        return api.getApi('quizzes').then(value => value._embedded.quizzes,);
    }

    static getQuizById(id) {

        return api.getApi(`quizzes/${id}`).then(value => value,);
    }
}

export default QuizService;
