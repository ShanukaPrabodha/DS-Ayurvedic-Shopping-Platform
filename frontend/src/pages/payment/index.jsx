import React from "react";
import Payment from "./Payment";

import { PaymentProvider } from "../../contexts/PaymentContext";

const Login = () => {
	return (
		<PaymentProvider>
			<Payment />
		</PaymentProvider>
	);
};

export default Login;
