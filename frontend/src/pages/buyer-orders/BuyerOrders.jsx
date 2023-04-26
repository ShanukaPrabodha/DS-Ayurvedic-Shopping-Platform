import React, { useContext } from "react";
import BuyerContext from "../../contexts/BuyerContext";
import OrderContext from "../../contexts/OrderContext";

const BuyerOrders = () => {
	const { buyer, getOneBuyer } = useContext(BuyerContext);
	const { orders, refetchOrders } = useContext(OrderContext);
	const id = localStorage.getItem("uId");
	const stripId = localStorage.getItem("stripeUserId");
	getOneBuyer(id);

	return (
		<>
			<section class="text-gray-600 body-font overflow-hidden">
				<div className="container px-4 py-16 mx-auto">
					<div className="flex flex-wrap w-full">
						<div className="lg:w-1/2 w-full mb-4 lg:mb-0">
							<h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
								Order History of {buyer.name}
							</h1>
							<div className="h-1 w-20 bg-green-500 rounded"></div>
						</div>
					</div>
					<div className="container px-5 py-24 mx-auto">
						<div className="-my-8 divide-y-2 divide-gray-100">
							{orders &&
								orders
									.filter((elem) => elem.stripeUserId == stripId)
									.map((order) => (
										<div className="flex flex-wrap md:flex-nowrap">
											<div className="md:flex-grow">
												{order &&
													order.products.map((product) => (
														<>
															<h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{product.name}</h2>
															<p className="leading-relaxed">
																<div className="flex border-t border-gray-200 py-2">
																	<span clasNames="text-gray-500">Product Price</span>
																	<span className="ml-auto text-gray-900">{product.price}</span>
																</div>
																<div className="flex border-t border-b mb-6 border-gray-200 py-2">
																	<span class="text-gray-500">Quantity</span>
																	<span class="ml-auto text-gray-900">{product.quantity}</span>
																</div>
															</p>
														</>
													))}
												<div className="flex border-t border-b mb-6 border-gray-200 py-2">
													<span className="text-gray-500">Total Amount</span>
													<span class="ml-auto text-gray-900">{order.amount}</span>
												</div>
												<div class="flex border-t border-b mb-6 border-gray-200 py-2">
													<span className="text-gray-500">Order Status</span>
													<span class="ml-auto text-green-500 font-bold">{order.status}</span>
												</div>
											</div>
										</div>
									))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BuyerOrders;
