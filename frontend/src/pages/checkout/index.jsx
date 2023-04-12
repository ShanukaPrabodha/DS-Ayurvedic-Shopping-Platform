import React from "react";
import CheckoutAPI from "../../contexts/api/CheckoutAPI";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../../components";

const Checkout = () => {
	const navigate = useNavigate();

	const userId = "cus_NhCuFcVQHkHfz5";
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
	const commission = 0.05;
	const amount = products.reduce((acc, product) => acc + product.price * product.quantity, 0) * (1 + commission);

	const order = {
		userId,
		products,
		amount,
	};

	// Create a order
	const { mutate: createOrder, isLoading: createOrderLoading } = useMutation(() => CheckoutAPI.createOrder(order), {
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

			<h1 className="mt-5 text-4xl text-center">Order Summary</h1>

			<div className="flex justify-center mt-5">
				{/* Show products and total amount */}
				<div className="w-1/2">
					<div className="flex justify-between">
						<h2 className="text-xl">Products</h2>
						<h2 className="text-xl">Amount(LKR)</h2>
					</div>
					{products.map((product) => (
						<div className="flex justify-between mt-2" key={product.id}>
							<div className="flex flex-col">
								<span>{product.name}</span>
								<span className="text-sm text-gray-500">
									{product.quantity} x {product.price}
								</span>
							</div>
							<span>LKR {product.quantity * product.price}</span>
						</div>
					))}
					<div className="flex justify-between mt-2">
						<span className="text-sm text-gray-500">Commission</span>
						<span className="text-sm text-gray-500">{commission * 100}%</span>
					</div>
					<hr className="mt-5" />
					{/* Subtotal - 2 decimal places */}
					<div className="flex justify-between mt-2">
						<span className="text-lg">Subtotal</span>
						<span className="text-lg">LKR {(amount - amount * commission).toFixed(2)}</span>
					</div>
					{/* Commission */}
					<div className="flex justify-between mt-2">
						<span className="text-lg">Commission</span>
						<span className="text-lg">LKR {(amount * commission).toFixed(2)}</span>
					</div>
					{/* Total */}
					<div className="flex justify-between mt-2 font-bold">
						<span className="text-xl">Order Total</span>
						<span className="text-xl">LKR {amount.toFixed(2)}</span>
					</div>
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
