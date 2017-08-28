import api from '../api/ApiService';

class QuizService {

    static getAllQuizzes() {
        return api.getApi('quizzes').then(value => value._embedded.quizzes,);
    }

    static getQuizById(id) {

        return api.get(`quizzes/${id}`).then(value => value,);
    }
}

export default QuizService;
