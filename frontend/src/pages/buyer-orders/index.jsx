import React from "react";
import BuyerOrders from "./BuyerOrders";

import { OrderProvider } from "../../contexts/OrderContext";
import { BuyerProvider } from "../../contexts/BuyerContext";

const index = () => {
	return (
		<>
			<BuyerProvider>
				<OrderProvider>
					<BuyerOrders />
				</OrderProvider>
			</BuyerProvider>
		</>
	);
};

export default index;
