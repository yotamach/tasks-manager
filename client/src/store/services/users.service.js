import serviceRequest from 'store/serviceRequest';
import ApiUrls from './api-urls';

export function registerUser() {
	return serviceRequest(`${ApiUrls.users}/register`,'get',null);
}