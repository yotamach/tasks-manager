const express = require('express');
const router = express.Router();
const {
	Category
} = require("../models/Category");

// const {
// 	auth
// } = require("../middleware/auth");

//=================================
//             Category
//=================================

router.get("/", (req, res) => {
	Category.find({}, null, (err, categories) => {
		if (err) {
			return res.status(500).json({
				success: false,
				error: err
			})
		}
		return res.status(200).json({
			success: true,
			categories
		})
	});
});

router.post("/", (req, res) => {
	const category = new Category({
		...req.body,
		creationTime: new Date()
	});
	category.save((err, category) => {
		if (err) return res.status(500).json({
			success: false,
			error: err
		});
		return res.status(200).json({
			success: true,
			category
		});
	});
});

router.get("/:id", (req, res) => {
	Category.findOne({
		_id: req.params.id
	}, (err, category) => {
		if (err)
			return res.status(500).json({
				success: false,
				error: err.message
			});
		else {
			if (!category)
				return res.status(404).json({ 
					success: false,
					error: "Category not found",
				});
			return res.status(200).json({
				success: true,
				category
			});
		}
	});
});

router.put("/:id", (req, res) => {
	Category.findOneAndUpdate({
		_id: req.params.id
	},req.body, {new: true}, (err, category) => {
		if (err)
			return res.status(500).json({
				success: false,
				error: err.message
			});
		else {
			if (!category)
				return res.status(404).json({
					success: false,
					error: "No category found to update",
				})
			return res.status(200).json({
				success: true,
				category
			});
		}
	});
});

router.delete("/:id", (req, res) => {
	Category.findByIdAndDelete({
		_id: req.params.id
	}, (err, category) => {
		if (err)
			return res.status(500).json({
				success: false,
				error: err.message
			});
		else {
			if (!category)
				return res.status(404).json({
					success: false,
					error: "Category doesn't exist"
				});
			return res.status(200).json({
				success: true,
				category
			});
		}
	});
});

module.exports = router;