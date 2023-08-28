import axios from 'axios';

export const getPostData = () => {
    return axios.get('http://localhost:8080/user');
}