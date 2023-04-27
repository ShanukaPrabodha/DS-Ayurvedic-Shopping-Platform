import React from "react";
import SellerReview from "./SellerReview";

// ProductProvider
import { ReviewProvider } from "../../contexts/SellerReviewContext";

const index = () => {
	return (
		<>
			<ReviewProvider>
				<SellerReview />
			</ReviewProvider>
		</>
	);
};

export default index;