import React from "react";
import BuyerDispatchOrders from "./BuyerDispatchOrders";

import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerDispatchOrders />
			</OrderProvider>
		</>
	);
};

export default index;
