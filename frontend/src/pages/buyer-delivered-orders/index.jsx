import React from "react";
import BuyerDeliveredOrders from "./BuyerDeliveredOrders";

import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerDeliveredOrders />
			</OrderProvider>
		</>
	);
};

export default index;
