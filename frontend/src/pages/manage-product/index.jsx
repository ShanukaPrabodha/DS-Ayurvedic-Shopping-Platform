import React from "react";
import ManageProducts from "./manageProducts";
// ProductProvider
import { ProductProvider } from "../../contexts/ProductContext";

const index = () => {
	return (
		<>
			<ProductProvider>
				<ManageProducts />
			</ProductProvider>
		</>
	);
};

export default index;
