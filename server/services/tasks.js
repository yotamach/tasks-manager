const {Task} = require("../models/Task");

class TasksManager {
    
	createTask(params) {
        const task = new Task({
            ...params,
            creationTime: new Date()
        });
        return task.save();
	}

	getTasks() {
		return Task.find({});
	}

	updateTask() {

	}

	deleteTask() {

	}
};

module.exports = TasksManager;