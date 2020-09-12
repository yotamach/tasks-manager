import * as axios from 'axios';
const baseUrl = 'http://localhost:5000';

const serviceRequest = (url,method) => {
    return axios({method,url: baseUrl + url,responseType: 'json'});
};

export default serviceRequest;