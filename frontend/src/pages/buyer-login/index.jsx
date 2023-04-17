import React from "react";
import BuyerLogin from "./BuyerLogin";

import { BuyerProvider } from "../../contexts/BuyerContext";

const index = () => {
	return (
		<BuyerProvider>
			<BuyerLogin />
		</BuyerProvider>
	);
};

export default index;
