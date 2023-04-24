import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import OrderAPI from "./api/OrderAPI";

const OrderContext = createContext();
const COMMISION = import.meta.env.VITE_COMMISION_RATE;

export function OrderProvider({ children }) {
	const navigate = useNavigate();

	const stripeUserId = localStorage.getItem("stripeUserId");
	const products = [
		{
			id: 1,
			name: "Product 1",
			price: 849,
			quantity: 1,
		},
		{
			id: 2,
			name: "Product 2",
			price: 225,
			quantity: 2,
		},
	];
	const commission = Number(COMMISION);
	const amount = products.reduce((acc, product) => acc + product.price * product.quantity, 0) * (1 + commission);

	const order = {
		stripeUserId,
		products,
		amount,
	};

	// Get orders
	const {
		data: orders,
		isLoading: ordersLoading,
		refetch: refetchOrders,
	} = useQuery(["orders"], () => OrderAPI.getOrders(), {
		enabled: true,
	});

	// Create a order
	const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(() => OrderAPI.createOrder(order), {
		onSuccess: (data) => {
			navigate(`/payment/${data._id}`);
		},
	});

	return (
		<OrderContext.Provider
			value={{
				order,
				commission,
				createOrder,
				createOrderLoading,
				orders,
				ordersLoading,
				refetchOrders,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderContext;
