import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PaymentContext from "../../contexts/PaymentContext";

const PaymentSuccess = () => {
	const navigate = useNavigate();
	const { paymentDetails, paymentDetailsLoading } = useContext(PaymentContext);

	return (
		<div>
			<h1 className="mt-5 text-4xl text-center">Payment Success Page</h1>
			{paymentDetailsLoading && <div>Loading...</div>}
			{paymentDetails && (
				<div>
					<h2>Payment Details</h2>
					<div>
						<h3>Payment ID: {paymentDetails.id}</h3>
						<h3>Payment Status: {paymentDetails.status}</h3>
						<h3>Payment Amount: {paymentDetails.amount / 100}</h3>
						<h3>Payment Currency: {paymentDetails.currency}</h3>
					</div>
				</div>
			)}

			{/* Continue Shopping Button */}
			<div className="flex justify-center mt-5">
				<button
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={() => navigate("/")}
				>
					Continue Shopping
				</button>
			</div>
		</div>
	);
};

export default PaymentSuccess;
