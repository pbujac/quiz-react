import * as Axios from "axios";
import {KeyTransformer} from "../utils/KeyTransformer";

const API_END_POINT = 'http://localhost/app_dev.php/api/v1';

class ApiService {

    static setDefaultAuthorizationHeader() {
        let key = 'authentication';

        if (localStorage.getItem(key) !== null) {
            Axios.defaults.headers.common[key] = localStorage.getItem(key);
        }
    }

    static getEndPoint(path) {
        return API_END_POINT + '/' + path;
    }

    static get(path) {

        this.setDefaultAuthorizationHeader();
        let endPoint = this.getEndPoint(path);

        return Axios.get(endPoint).then(response => {
            return response.data;
        }).catch(error => {
            throw(error);
        });
    }

    static post(path, body) {

        this.setDefaultAuthorizationHeader();
        let endPoint = this.getEndPoint(path);
        body = KeyTransformer.transformToSnakeCase(body);

        return Axios.post(endPoint, body).then(response => {

            return response.data;
        }).catch(error => {
            throw(error);
        });
    }
}

export default ApiService;