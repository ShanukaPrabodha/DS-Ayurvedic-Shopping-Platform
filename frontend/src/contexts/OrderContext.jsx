/* eslint-disable no-console */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import OrderAPI from "./api/OrderAPI";

const OrderContext = createContext();
const COMMISION = import.meta.env.VITE_COMMISION_RATE;

export function OrderProvider({ children }) {
	const navigate = useNavigate();

	const stripeUserId = localStorage.getItem("stripeUserId");
	// const localOrder = JSON.parse(localStorage.getItem("order"));

	const commission = Number(COMMISION);
	// const amount = localOrder.price * localOrder.qty * (1 + commission);

	// const order = {
	// 	stripeUserId: stripeUserId,
	// 	productId: localOrder._id,
	// 	product_name: localOrder.product_name,
	// 	price: localOrder.price,
	// 	qty: localOrder.qty,
	// 	supplier: localOrder.supplier,
	// 	stock: localOrder.stock,
	// 	productImage: localOrder.productImage,
	// 	status: "pending",
	// 	isPaid: false,
	// 	amount: amount,
	// };

	// Get orders
	const {
		data: orders,
		isLoading: ordersLoading,
		refetch: refetchOrders,
	} = useQuery(["orders"], () => OrderAPI.getOrders(), {
		enabled: true,
	});

	// Create a order
	// const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(() => OrderAPI.createOrder(order), {
	// 	onSuccess: (data) => {
	// 		navigate(`/payment/${data._id}`);
	// 	},
	// });


	return (
		<OrderContext.Provider
			value={{
				// order,
				commission,
				// createOrder,
				// createOrderLoading,
				orders,
				ordersLoading,
				refetchOrders,
				navigate,
			}}
		>
			{children}
		</OrderContext.Provider>
	);
}

export default OrderContext;
