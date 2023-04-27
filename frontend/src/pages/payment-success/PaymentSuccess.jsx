import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PaymentContext from "../../contexts/PaymentContext";

const PaymentSuccess = () => {
	const navigate = useNavigate();
	const { paymentDetails, paymentDetailsLoading } = useContext(PaymentContext);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
			<div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
				<h1 className="mt-5 text-4xl text-center font-bold text-gray-800">Payment Successful</h1>

				{paymentDetailsLoading && <div className="mt-8 text-center text-gray-600">Loading...</div>}
				{paymentDetails && (
					<div className="mt-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Details</h2>
						<div className="bg-gray-100 rounded-lg p-4">
							<div className="flex flex-col md:flex-row">
								<div className="md:w-1/2">
									<h3 className="text-lg font-bold text-gray-700 mb-2">Payment ID:</h3>
									<p className="text-gray-600">{paymentDetails.id.substring(0, 20) + "..."}</p>
								</div>
								<div className="md:w-1/2 md:pl-8">
									<h3 className="text-lg font-bold text-gray-700 mb-2">Payment Status:</h3>
									<p className="text-gray-600">{paymentDetails.status}</p>
								</div>
							</div>
							<div className="flex flex-col md:flex-row mt-4">
								<div className="md:w-1/2">
									<h3 className="text-lg font-bold text-gray-700 mb-2">Payment Amount:</h3>
									<p className="text-gray-600">
										{paymentDetails.amount / 100} {paymentDetails.currency}
									</p>
								</div>
								<div className="md:w-1/2 md:pl-8">
									<h3 className="text-lg font-bold text-gray-700 mb-2">Payment Date:</h3>
									<p className="text-gray-600">
										{new Date(paymentDetails.created * 1000).toLocaleDateString()}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Continue Shopping Button */}
				<div className="flex justify-center mt-8">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
						onClick={() => navigate("/product-display")}
					>
						Continue Shopping
					</button>
				</div>
			</div>
		</div>
	);
};

export default PaymentSuccess;
