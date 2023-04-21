import React from "react";
import ProductReview from "./ProductReview";

// ProductProvider
import { ReviewProvider } from "../../contexts/ProductReviewContext";

const index = () => {
	return (
		<>
			<ReviewProvider>
				<ProductReview />
			</ReviewProvider>
		</>
	);
};

export default index;