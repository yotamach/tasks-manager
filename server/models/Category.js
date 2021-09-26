const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		maxlength: 50,
		required: [true, "Category name is missing"]
	},
	creationTime: {
		type: Date,
		minglength: 5
	},
});


const Category = mongoose.model("Category", categorySchema);

module.exports = {
	Category
};