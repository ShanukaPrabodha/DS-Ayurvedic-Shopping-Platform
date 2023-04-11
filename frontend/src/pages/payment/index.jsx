import React from "react";
import PaymentAPI from "../../contexts/api/PaymentAPI";
import CheckoutAPI from "../../contexts/api/CheckoutAPI";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AddCardModal from "./AddCardModal";
import Swal from "sweetalert2";

const Payment = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = React.useState(null);
	const [isOpen, setIsOpen] = React.useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// This will get from current user
	const userId = "cus_Nh2fSNEhLusl8u";

	// Get order id from url
	const { orderId } = useParams();

	// Get order details
	const { data: order, isLoading: orderLoading } = useQuery(["order"], () => CheckoutAPI.getOrder(orderId), {
		enabled: !!orderId,
		onSuccess: (data) => {
			if (data.isPaid) {
				Swal.fire({
					title: "Error!",
					text: "Order already paid",
					icon: "error",
					timer: 3000,
					timerProgressBar: true,
				}).then(() => {
					window.location.href = "/";
				});
			}
		},
	});

	// get payment methods
	const {
		data: paymentMethods,
		isLoading: paymentMethodsLoading,
		refetch,
	} = useQuery(["paymentMethods"], () => PaymentAPI.getPaymentMethods(userId), {
		enabled: !!userId,
	});

	// Make a payment
	const { mutate: makePayment, isLoading: makePaymentLoading } = useMutation(
		() => PaymentAPI.createPaymentIntent(order.amount, "LKR", userId, selectedPaymentMethod, orderId),
		{
			onSuccess: (data) => {
				Swal.fire({
					title: "Success!",
					text: "Payment Successful",
					icon: "success",
					timer: 3000,
					timerProgressBar: true,
				});
			},
		}
	);

	const handleMakePayment = () => {
		makePayment();
	};

	return (
		<>
			{/* Modal */}
			{isOpen && <AddCardModal closeModal={closeModal} isOpen={isOpen} refetch={refetch} />}

			<h1 className="mt-5 text-4xl text-center">Payment Page</h1>

			{/* add payment method button */}
			<div className="flex justify-center mt-5">
				<button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600" onClick={openModal}>
					Add New Card
				</button>
			</div>

			{/* display payment methods - stripe */}
			{paymentMethods && paymentMethods.data.length > 0 && (
				<div className="flex justify-center">
					<div className="flex justify-center mt-5 flex-col">
						<h2 className="text-xl font-bold underline mb-2">Payment Methods</h2>
						{paymentMethods.data.map((paymentMethod) => (
							<div className="flex flex-col justify-center" key={paymentMethod.id}>
								<p className="text-lg">Payment Method ID: {paymentMethod.id}</p>
								<p className="text-lg">Card Number: {paymentMethod.card.last4}</p>
								<p className="text-lg">Card Brand: {paymentMethod.card.brand}</p>
								{/* Radio button */}
								<div className="mt-5">
									<input
										type="radio"
										name="paymentMethod"
										value={paymentMethod.id}
										onChange={(e) => setSelectedPaymentMethod(e.target.value)}
									/>
								</div>

								<hr className="my-5" />
							</div>
						))}
					</div>
				</div>
			)}

			{/* if no payment methods */}
			{paymentMethods && paymentMethods.data.length === 0 && (
				<div className="flex justify-center mt-5">
					<h2 className="text-xl">- No Payment Methods -</h2>
				</div>
			)}

			{/* display order details */}
			{order && (
				<div className="flex justify-center mt-5">
					<div className="flex justify-between mt-2">
						<span className="text-xl">Total : </span>
						<span className="text-xl">{order.amount}/=</span>
					</div>
				</div>
			)}

			{/* make payment button */}
			{order && (
				<div className="flex justify-center mt-5">
					<button
						className="px-4 py-2 mb-10 text-white bg-green-500 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
						onClick={handleMakePayment}
						disabled={makePaymentLoading || !selectedPaymentMethod || order.isPaid}
					>
						Make Payment
					</button>
				</div>
			)}
		</>
	);
};

export default Payment;
