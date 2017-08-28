import api from '../api/ApiService';

class CategoryService {

    static getAllCategories() {
        return api.get('categories').then(value => value._embedded.categories,);
    }
}

export default CategoryService;
