import PaymentSuccess from "./PaymentSuccess";

import { PaymentProvider } from "../../contexts/PaymentContext";

const index = () => {
	return (
		<PaymentProvider>
			<PaymentSuccess />
		</PaymentProvider>
	);
};

export default index;
