import React from "react";
import BuyerConfirmOrders from "./BuyerConfirmOrders";
import { OrderProvider } from "../../contexts/OrderContext";

const index = () => {
	return (
		<>
			<OrderProvider>
				<BuyerConfirmOrders />
			</OrderProvider>
		</>
	);
};

export default index;
