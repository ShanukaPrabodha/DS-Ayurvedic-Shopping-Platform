import React from "react";
import PaymentAPI from "../../contexts/api/PaymentAPI";
import CheckoutAPI from "../../contexts/api/CheckoutAPI";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AddCardModal from "./AddCardModal";
import Swal from "sweetalert2";
import { Spinner } from "../../components";

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
	const userId = "cus_NhCuFcVQHkHfz5";

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
			{orderLoading && <Spinner />}
			{paymentMethodsLoading && <Spinner />}
			{makePaymentLoading && <Spinner />}

			{/* Modal */}
			{isOpen && <AddCardModal closeModal={closeModal} isOpen={isOpen} refetch={refetch} />}

			<h1 className="mt-5 text-4xl text-center">Payment</h1>

			{/* please select a payment method message */}
			{paymentMethods && paymentMethods.data.length > 0 && !selectedPaymentMethod && (
				<div className="flex justify-center mt-5 animate-pulse">
					<div className="flex justify-center bg-yellow-200 p-2 rounded text-yellow-700 w-1/2 border-2 border-yellow-500">
						<h2 className="text-xl">Please Select a Payment Method</h2>
					</div>
				</div>
			)}

			{/* if no payment methods found display this message */}
			{paymentMethods && paymentMethods.data.length === 0 && (
				<div className="flex justify-center mt-5 animate-pulse">
					<div className="flex justify-center bg-red-200 p-2 rounded text-red-700 w-1/2 border-2 border-red-500">
						<h2 className="text-xl">No Payment Methods Found</h2>
					</div>
				</div>
			)}

			{/* display payment methods cards - stripe */}
			<div className="flex justify-center mt-5">
				<div className="flex flex-col w-1/2">
					{paymentMethods && paymentMethods.data.length > 0 && (
						<div>
							{paymentMethods.data.map((paymentMethod) => (
								<div
									key={paymentMethod.id}
									className={`${
										selectedPaymentMethod === paymentMethod.id
											? "border-2 border-green-500"
											: "border-2 border-gray-300"
									} p-2 rounded mb-5 cursor-pointer`}
									onClick={() => setSelectedPaymentMethod(paymentMethod.id)}
								>
									<div className="flex justify-between">
										<span className="text-xl">Name : </span>
										<span className="text-xl">{paymentMethod.billing_details.name}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-xl">Card Number : </span>
										<span className="text-xl">**** **** **** {paymentMethod.card.last4}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-xl">Expiry Date : </span>
										<span className="text-xl">
											{paymentMethod.card.exp_month}/{paymentMethod.card.exp_year}
										</span>
									</div>
								</div>
							))}
						</div>
					)}
					{/* plus icon card for adding new payment method */}
					<div
						className="border-2 border-gray-300 p-2 rounded mb-5 cursor-pointer hover:border-green-500"
						onClick={openModal}
					>
						<div className="flex justify-center">
							<span className="text-3xl font-bold">+</span>
						</div>
					</div>
				</div>
			</div>

			{/* display order details in a card */}
			{order && (
				<div className="flex justify-center">
					<div className="flex justify-center mt-5 p-5 rounded shadow w-1/2 bg-gray-100">
						<div className="flex justify-between">
							<span className="text-3xl">LKR {order.amount}</span>
						</div>
					</div>
				</div>
			)}

			{order && (
				<div className="flex justify-center mt-5">
					<button
						className="px-4 py-2 mb-10 text-white bg-green-500 rounded hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
						onClick={handleMakePayment}
						disabled={makePaymentLoading || !selectedPaymentMethod || order.isPaid}
					>
						{makePaymentLoading ? "Processing..." : "Make Payment"}
					</button>
				</div>
			)}
		</>
	);
};

export default Payment;
