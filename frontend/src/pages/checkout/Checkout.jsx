import React, { useContext } from "react";
import { Spinner } from "../../components";
import OrderContext from "../../contexts/OrderContext";
import { useMutation } from "@tanstack/react-query";
import OrderAPI from "../../contexts/api/OrderAPI";

const Checkout = () => {
	const { navigate, commission } = useContext(OrderContext);

	const stripeUserId = localStorage.getItem("stripeUserId");
	const localOrder = JSON.parse(localStorage.getItem("order"));

	const amount = localOrder.price * localOrder.qty * (1 + commission);

	const order = {
		stripeUserId: stripeUserId,
		productId: localOrder._id,
		product_name: localOrder.product_name,
		price: localOrder.price,
		qty: localOrder.qty,
		supplier: localOrder.supplier,
		stock: localOrder.stock,
		productImage: localOrder.productImage,
		status: "pending",
		isPaid: false,
		amount: amount,
	};

	// Create a order
	const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(() => OrderAPI.createOrder(order), {
		onSuccess: (data) => {
			navigate(`/payment/${data._id}`);
		},
	});

	const handleCreateOrder = () => {
		createOrder();
	};

	return (
		<>
			{createOrderLoading && <Spinner />}

			<h1 className="mt-5 text-4xl text-center font-bold">Order Summary</h1>

			<div className="flex justify-center mt-5">
				{/* Show products and total amount */}
				<div className="w-1/2 border-2 border-gray-300 rounded-lg p-4">
					<div className="flex justify-between">
						<h2 className="text-xl font-bold">{order.product_name}</h2>
						<h2 className="text-xl font-bold">Amount(LKR)</h2>
					</div>
					{order && (
						<div>
							<div className="flex justify-between mt-2" key={order.id}>
								<div className="flex flex-col">
									<span className="font-bold">{order.name}</span>
									<span className="text-sm text-gray-500">
										{order.qty} x LKR {order.price}
									</span>
								</div>
								<span>LKR {(order.price * order.qty).toFixed(2)}</span>
							</div>

							<div className="flex justify-between mt-2">
								<span className="text-sm text-gray-500 font-bold">Commission</span>
								<span className="text-sm text-gray-500 font-bold">{commission * 100}%</span>
							</div>
							<hr className="mt-5" />
							{/* Subtotal - 2 decimal places */}
							<div className="flex justify-between mt-2">
								<span className="text-lg font-bold">Subtotal</span>
								<span className="text-lg font-bold">LKR {(order.price * order.qty).toFixed(2)}</span>
							</div>
							{/* Commission */}
							<div className="flex justify-between mt-2">
								<span className="text-lg font-bold">Commission</span>
								<span className="text-lg font-bold">LKR {(order.price * order.qty * commission).toFixed(2)}</span>
							</div>
							{/* Total */}
							<div className="flex justify-between mt-2 font-bold">
								<span className="text-xl">Order Total</span>
								<span className="text-xl">LKR {order.amount.toFixed(2)}</span>
							</div>
						</div>
					)}
				</div>
			</div>

			<div className="flex justify-center mt-5">
				<button
					// orange color continue button pop effect
					className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4 disabled:opacity-50 disabled:cursor-not-allowed"
					onClick={handleCreateOrder}
					disabled={createOrderLoading}
				>
					Place Order
				</button>
			</div>
		</>
	);
};

export default Checkout;
