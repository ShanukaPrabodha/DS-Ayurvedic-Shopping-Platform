import React from "react";
import ProductDisplay from "./ProductDisplay";

// ProductProvider
import { ProductProvider } from "../../contexts/ProductContext";

const index = () => {
	return (
		<>
			<ProductProvider>
				<ProductDisplay />
			</ProductProvider>
		</>
	);
};

export default index;