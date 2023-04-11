const mongoose = require("mongoose");

const DeliverySchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("Delivery", DeliverySchema);
