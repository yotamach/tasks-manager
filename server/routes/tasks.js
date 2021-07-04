const express = require('express');
const router = express.Router();
const {
	Task
} = require("../models/Task");

// const {
// 	auth
// } = require("../middleware/auth");

//=================================
//             Task
//=================================

router.get("/", (req, res) => {
	Task.find({}, null, (err, tasks) => {
		if (err) {
			return res.status(500).json({
				success: false,
				error: err
			})
		}
		return res.status(200).json({
			success: true,
			tasks
		})
	});
});

router.post("/createTask", (req, res) => {
	const task = new Task({
		...req.body,
		status: 'defined',
		creationTime: new Date()
	});
	task.save((err, task) => {
		if (err) return res.status(500).json({
			success: false,
			error: err
		});
		return res.status(200).json({
			success: true,
			task
		});
	});
});

router.get("/:id", (req, res) => {
	Task.findOne({
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
					task
				});
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
					task: {}
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