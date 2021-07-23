import * as axios from 'axios';
import { clearServerError } from './errors/actions';
const baseUrl = process.env.SERVER_URL || 'http://localhost:5000';

const serviceRequest = (url,method,data,successMethod,failureMethod) => {
	clearServerError();
	return axios({method,url: baseUrl + url,data}).then(successMethod).catch(failureMethod);
};
export default serviceRequest;