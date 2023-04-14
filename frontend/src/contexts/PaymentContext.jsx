import { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PaymentAPI from "./api/PaymentAPI";
import OrderAPI from "./api/OrderAPI";
import { useQuery, useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
	const navigate = useNavigate();

	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	// This will get from current user
	const stripeUserId = localStorage.getItem("stripeUserId");

	// Get order id from url
	const { orderId } = useParams();

	// Get order details
	const { data: order, isLoading: orderLoading } = useQuery(["order"], () => OrderAPI.getOrder(orderId), {
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
		refetch: refetchPaymentMethods,
	} = useQuery(["paymentMethods"], () => PaymentAPI.getPaymentMethods(stripeUserId), {
		enabled: !!stripeUserId,
	});

	// Make a payment
	const { mutate: makePayment, isLoading: makePaymentLoading } = useMutation(
		() => PaymentAPI.createPaymentIntent(order.amount, "LKR", stripeUserId, selectedPaymentMethod, orderId),
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

	return (
		<PaymentContext.Provider
			value={{
				selectedPaymentMethod,
				setSelectedPaymentMethod,
				isOpen,
				closeModal,
				openModal,
				order,
				orderLoading,
				paymentMethods,
				paymentMethodsLoading,
				makePayment,
				makePaymentLoading,
				refetchPaymentMethods,
			}}
		>
			{children}
		</PaymentContext.Provider>
	);
}

export default PaymentContext;
