const getUTCDate = (dateString = Date.now()) => {
	const date = new Date(dateString);
	return new Date(date.getTime() + date.getTimezoneOffset()*60*1000)
};

const handleStatusLabelColor = (status) => {
	switch (status) {
	case 'defined':
		return 'blue';
	case 'in progress':    
		return 'yellow';   
	case 'completed':    
		return 'teal'; 
	case 'accepted':    
		return 'green'; 
	case 'blocked':    
		return 'red';     
	default:
		return 'grey';
	}
}

const handleStatusLabel = (status) => {
	switch (status) {
	case 'defined':
		return 'Defined';
	case 'inProgress':    
		return 'In progress';   
	case 'completed':    
		return 'Completed'; 
	case 'accepted':    
		return 'Accepted'; 
	case 'blocked':    
		return 'Blocked';     
	default:
		return 'grey';
	}
}


export {
	getUTCDate,
	handleStatusLabel,
	handleStatusLabelColor
}