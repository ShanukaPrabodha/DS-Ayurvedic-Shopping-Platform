const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
	// TODO: Add more fields
	productId: {
		type: String,
		required: true,
	},

	productName: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	
	supplier: {
		type: String,
		required: true,
	},
	supplierName: {
		type: String,
		required: true,
	},
	weight: {
		type: String,
		required: true,
	},
	variants: [
		{size:{
			type:String,
		    required:true
		      } ,
		price:{
			type:Number,
		    required:true
		      }, 
		stock:{
			type:String,
			required:true
			  } ,}
			],
	productImage: {
		    type:String,
		    required:true
	},
});

module.exports = mongoose.model("Product", ProductSchema);

