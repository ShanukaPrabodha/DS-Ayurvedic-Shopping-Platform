import React from "react";
import ProductAdd from "./productAdd";

// HotelPackageProvider
import { ProductProvider } from "../../contexts/api/productAPI";

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
