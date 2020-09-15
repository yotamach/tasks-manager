import * as axios from 'axios';
const baseUrl = 'http://localhost:5000';

const serviceRequest = (url,method,action,successMethod,failureMethod) => {
    return axios({method,url: baseUrl + url,responseType: 'json'}).then(successMethod).catch(failureMethod);
};

export default serviceRequest;