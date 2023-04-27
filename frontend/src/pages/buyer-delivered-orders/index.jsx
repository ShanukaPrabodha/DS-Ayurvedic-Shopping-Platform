import React from "react";
import BuyerDeliveredOrders from "./BuyerDeliveredOrders";

import { BuyerProvider } from "../../contexts/BuyerContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<BuyerProvider>
				<OrderProvider />
				<BuyerDeliveredOrders />
				<OrderProvider />
			</BuyerProvider>
		</>
	);
};

export default index;