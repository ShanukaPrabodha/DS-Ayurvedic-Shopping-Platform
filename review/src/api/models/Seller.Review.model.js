const mongoose = require("mongoose");

const SellerReviewSchema = new mongoose.Schema({
	// TODO: Add more fields
	seller_id: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("SellerReview", SellerReviewSchema);