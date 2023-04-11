const mongoose = require("mongoose");

const BuyerAuthSchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("BuyerAuth", BuyerAuthSchema);
