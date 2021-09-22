import * as axios from 'axios';
import { clearServerError } from './errors/actions';
const baseUrl = process.env.SERVER_URL || 'http://localhost:5000';

const serviceRequest = (url,method,data) => {
	clearServerError();
	return axios({method,url: baseUrl + url,data});
};
export default serviceRequest;