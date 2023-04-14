import { createContext, useState, useEffect } from "react";
import requestConfig from "./requestConfig";
import requestConfigJson from "./requestConfigJson";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
		weight: "",
		variants: "",
		productImage:"",
		
	});

	useEffect(() => {
		setIsLoading(true);
		axios.get(`${BASE_URL}/product/`, requestConfig)
            .then((response) => {
			setProducts(response.data);
			setIsLoading(false);
		});
	}, []);

	// Add Hotel Package
	const addProduct = async (newProduct) => {
		// eslint-disable-next-line no-console
		console.log("package context :" + newProduct.productImage);

		try {
			setIsLoading(true);
			const response = await axios.post(`${BASE_URL}/product/`,newProduct,requestConfigJson);
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
            axios.get(`${BASE_URL}/product/${id}`, requestConfigJson).then((res) => {
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
		    weight: values.weight,
		    variants: values.variants,
			productImage:values.productImage,
		};
		axios.put(`${BASE_URL}/product/${id}`, newProduct, requestConfigJson)
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
		axios.delete(`${BASE_URL}/product/${id}`, requestConfig).then(() => {
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