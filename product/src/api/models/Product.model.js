const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	// TODO: Add more fields
});

module.exports = mongoose.model("Product", ProductSchema);
