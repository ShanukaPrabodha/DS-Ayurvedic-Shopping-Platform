const mongoose = require("mongoose");

const ProductReviewSchema = new mongoose.Schema({
	// TODO: Add more fields
	product_id: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("ProductReview", ProductReviewSchema);
