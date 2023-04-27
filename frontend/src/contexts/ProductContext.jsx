/* eslint-disable no-console */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductAPI from "./api/ProductApi";

const BASE_URL = "http://localhost:5003/api/product";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

const ProductContext = createContext();

export function ProductProvider({ children }) {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [products, setProducts] = useState([]);

	// Camping Package
	const [product, setProduct] = useState({
		productId: "0",
		productName: "",
		description: "",
		supplier: "",
		supplierName:"",
		weight: "",
		variants: "",
		productImage: "",
	});

	useEffect(() => {
		setIsLoading(true);
		ProductAPI.getProducts().then((response) => {
			setProducts(response.data);
			//console.log(products.values("productName"));
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addProduct = async (newProduct) => {
		// eslint-disable-next-line no-console
		console.log("package context :" + newProduct.productImage);

		try {
			setIsLoading(true);
			const response = await ProductAPI.createProduct(newProduct);
			setProducts([...products, response.data]);
			setIsLoading(false);
			alert("Data added successfully...");
			//navigate("/camping-vendor-dashboard");
		} catch (error) {
			// eslint-disable-next-line no-console
			console.log(error);
		}
	};

	//get One Camping Package

	const getProduct = (id) => {
		useEffect(() => {
			ProductAPI.getOneProduct(id).then((res) => {
				setProduct(res.data);
			});
		}, []);
	};

	// Edit camping Package
	const editProduct = (values) => {
		const newProduct = {
			productId: "0",
			productName: values.productId,
			description: values.description,
			supplier: values.supplier,
			supplierName:values.supplierName,
			weight: values.weight,
			variants: values.variants,
			productImage: values.productImage,
		};
		ProductAPI.editProduct(values.id, newProduct)
			.then((response) => {
				//console.log(res.data);
				//navigate("/viewres");
				// eslint-disable-next-line no-console
				console.log("updated successfully...");
				//navigate("/camping-vendor-dashboard");
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	// Delete trainer and update UI
	const deleteProduct = (id) => {
		ProductAPI.deleteProduct(id).then(() => {
			setProducts(products.filter((prod) => prod._id !== id));
		});
	};

	return (
		<ProductContext.Provider
			value={{
				isLoading,
				products,
				addProduct,
				getProduct,
				editProduct,
				deleteProduct,
				setProduct,
				product,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
}

export default ProductContext;
