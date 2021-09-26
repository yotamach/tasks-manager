const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50,
		required: [true, "Task name is missing"]
	},
	startDate: {
		type: Date,
		minglength: 5,
		default: new Date()
	},
	endDate: {
		type: Date,
		minglength: 5,
		required: [true, "End of date is missing"]
	},
	description: {
		type: String,
		minglength: 5
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: "Category"
	},
	status: {
		type: String,
		enum: ["defined", "in progress", "completed", "accepted"],
		maxlength: 50,
		default: "defined"
	},
	priority: {
		type: String,
		enum: ["low", "medium", "high", "critical"],
		maxlength: 50,
		default: "medium"
	},
	creationTime: {
		type: Date,
		minglength: 5
	},
});


const Task = mongoose.model("Task", taskSchema);

module.exports = {
	Task
};