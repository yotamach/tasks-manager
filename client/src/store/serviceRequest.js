import * as axios from 'axios';
import { clearServerError } from './errors/actions';
const baseUrl = 'http://localhost:5000';

const serviceRequest = (url,method,action,successMethod,failureMethod) => {
    clearServerError();
    return axios({method,url: baseUrl + url,responseType: 'json'}).then(successMethod).catch(failureMethod);
};

export default serviceRequest;