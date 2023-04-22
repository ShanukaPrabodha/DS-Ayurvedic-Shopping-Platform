import React from "react";
import BuyerProfileUpdate from "./BuyerProfileUpdate";

import { BuyerProvider } from "../../contexts/BuyerContext";

const index = () => {
	return (
		<BuyerProvider>
			<BuyerProfileUpdate />
		</BuyerProvider>
	);
};

export default index;
