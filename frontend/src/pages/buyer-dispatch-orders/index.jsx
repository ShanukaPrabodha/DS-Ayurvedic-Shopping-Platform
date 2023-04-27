import React from "react";
import BuyerDispatchOrders from "./BuyerDispatchOrders";

import { BuyerProvider } from "../../contexts/BuyerContext";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerProvider>
					<BuyerDispatchOrders />
				</BuyerProvider>
			</OrderProvider>
		</>
	);
};

export default index;
