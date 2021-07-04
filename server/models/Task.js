const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	taskName: {
		type: String,
		maxlength: 50,
		required: [true, 'Task name is missing']
	},
	endOfDate: {
		type: Date,
		minglength: 5,
		required: [true, 'End of date is missing']
	},
	description: {
		type: String,
		minglength: 5
	},
	status: {
		type: String,
		enum: ['defined', 'in progress', 'completed', 'accepted'],
		maxlength: 50
	},
	creationTime: {
		type: Date,
		minglength: 5
	},
})


const Task = mongoose.model('Task', taskSchema);

module.exports = {
	Task
}