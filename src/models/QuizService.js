import api from '../api/ApiService';

class QuizService {

    static getAllQuizzes() {

        return api.get('quizzes').then(value => value._embedded.quizzes,);
    }

    static getQuizById(id) {

        return api.get(`quizzes/${id}`).then(value => value,);
    }

    static saveQuiz(quiz) {

        return api.post(`quizzes`, quiz).then(value => value,);
    }
}

export default QuizService;
