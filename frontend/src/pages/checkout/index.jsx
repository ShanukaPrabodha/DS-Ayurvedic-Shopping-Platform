import React from "react";
import Checkout from "./Checkout";

import { OrderProvider } from "../../contexts/OrderContext";

const Login = () => {
	return (
		<OrderProvider>
			<Checkout />
		</OrderProvider>
	);
};

export default Login;
