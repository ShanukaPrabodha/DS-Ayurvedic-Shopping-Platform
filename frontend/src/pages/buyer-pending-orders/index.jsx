import React from "react";
import BuyerPendingOrders from "./BuyerPendingOrders";

import { BuyerProvider } from "../../contexts/BuyerContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerProvider>
					<BuyerPendingOrders />
				</BuyerProvider>
			</OrderProvider>
		</>
	);
};

export default index;
