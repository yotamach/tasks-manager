const express = require("express");
const { ErrorResponse, NotFoundResponse } = require("../constans");
const logger = require("../logger");
const router = express.Router();
const {Task} = require("../models/Task");

const TasksManager = require("../services/tasks");

//=================================
//             Task
//=================================

const tasksManager = new TasksManager();

router.get("/",async (req, res) => {
	const result = await tasksManager.getTasks();
	if (!result) {
		return res.status(500).json({
			...ErrorResponse,
			error: result.error
		});
	}
	return res.status(200).json(result);
});


router.post("/", async (req, res) => {
	try {
		const result = await tasksManager.createTask(req.body);
		return res.status(200).json({
			success: true,
			task: result
		});
	}
	catch(e) {
		logger.error(200,result);
		return res.status(400).json(ErrorResponse(err)); 
	}
});

router.get("/:id", (req, res) => {
	Task.findOne({
		_id: req.params.id
	}, (err, task) => {
		if (err)
			return res.status(500).json(ErrorResponse(err));
		else {
			if (!task)
				return res.status(404).json(NotFoundResponse("Task"));
			return res.status(200).json({
				success: true,
				task
			});
		}
	});
});

router.put("/:id", (req, res) => {
	Task.findOneAndUpdate({
		_id: req.params.id
	},req.body, {new: true}, (err, task) => {
		if (err)
			return res.status(500).json({
				success: false,
				error: err.message
			});
		else {
			if (!task)
				return res.status(404).json({
					success: false,
					error: "No task found to update",
				});
			return res.status(200).json({
				success: true,
				task
			});
		}
	});
});

router.delete("/:id", (req, res) => {
	Task.findByIdAndDelete({
		_id: req.params.id
	}, (err, task) => {
		if (err)
			return res.status(500).json({
				success: false,
				error: err.message
			});
		else {
			if (!task)
				return res.status(404).json({
					success: false,
					error: "Task doesn't exist"
				});
			return res.status(200).json({
				success: true,
				task
			});
		}
	});
});

module.exports = router;