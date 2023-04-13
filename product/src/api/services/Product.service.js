import ProductModel from "../models/Product.model";

// Insert one Product
export const insertProduct = async (packageData) => {
	return await ProductModel.create(packageData)
		.then(async (product) => {
			await product.save();
			return product;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get all Products
export const getAllProducts = async () => {
	return await ProductModel.find({})
		.then((products) => {
			return products;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Get one Product
export const getOneProduct = async (productId) => {
	return await ProductModel.findById(productId)
		.then((product) => {
			if (product) {
				return product;
			} else {
				throw new Error("Product not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Update one Product
export const updateProduct = async (productId, productData) => {
	return await ProductModel.findByIdAndUpdate(productId, productData, {
		new: true,
	})
		.then((product) => {
			if (product) {
				return product;
			} else {
				throw new Error("Product not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Delete one Product
export const deleteProduct = async (productId) => {
	return await ProductModel.findByIdAndDelete(productId)
		.then((product) => {
			if (product) {
				return product;
			} else {
				throw new Error("Product not found");
			}
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};

// Search Products titles or content
export const searchProducts = async (searchTerm) => {
	return await ProductModel.find({
		$or: [{ title: { $regex: searchTerm, $options: "i" } }, { content: { $regex: searchTerm, $options: "i" } }],
	})
		.then((products) => {
			return products;
		})
		.catch((error) => {
			throw new Error(error.message);
		});
};
