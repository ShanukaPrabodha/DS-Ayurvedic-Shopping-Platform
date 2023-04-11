const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("Order", OrderSchema);
