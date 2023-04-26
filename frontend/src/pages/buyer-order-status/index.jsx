import React from "react";
import BuyerOrderStatus from "./BuyerOrderStatus";

// import { BuyerProvider } from "../../contexts/BuyerContext";
///import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
        // <OrderProvider>
		// <BuyerProvider>
			<BuyerOrderStatus />
		// </BuyerProvider>
        // </OrderProvider>
	);
};

export default index;
