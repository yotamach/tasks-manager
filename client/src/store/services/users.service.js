import serviceRequest from 'store/serviceRequest';
import ApiUrls from './api-urls';

export function postRegister(data) {
	return serviceRequest(`${ApiUrls.users}/register`,'post',data);
}

export function postLogin(data) {
	return serviceRequest(`${ApiUrls.users}/login`,'post',data);
}

export function getLogout() {
	return serviceRequest(`${ApiUrls.users}/logout`,'get');
}