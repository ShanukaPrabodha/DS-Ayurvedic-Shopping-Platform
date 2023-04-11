const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("Review", ReviewSchema);
