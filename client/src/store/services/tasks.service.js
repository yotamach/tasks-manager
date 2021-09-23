
import serviceRequest from 'store/serviceRequest';
import ApiUrls from './api-urls';

export function getTasks() {
	return serviceRequest(ApiUrls.tasks,'get',null);
}

export function getTask(id) {
	return serviceRequest(`${ApiUrls.tasks}/${id}`,'get',null);
}

export function postTask(data) {
	return serviceRequest(`${ApiUrls.tasks}/`,'post',data);
}
export function putTask(id, data) {
	return serviceRequest(`${ApiUrls.tasks}/${id}`,'put',data);
}

export function deleteTask(id) {
	return serviceRequest(`${ApiUrls.tasks}/${id}`,'delete',null);
}