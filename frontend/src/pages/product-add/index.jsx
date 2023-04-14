import React from "react";
import ProductAdd from "./productAdd";

// ProductProvider
import { ProductProvider } from "../../contexts/ProductContext";

const index = () => {
	return (
		<>
			<ProductProvider>
				<ProductAdd />
			</ProductProvider>
		</>
	);
};

export default index;
