import React, { useContext } from "react";
import BuyerContext from "../../contexts/BuyerContext";
import OrderContext from "../../contexts/OrderContext";
import { Link } from "react-router-dom";

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

					<div className="flex flex-wrap -m-4 mt-6">
						{orders &&
							orders
								.filter((elem) => elem.stripeUserId == stripId)
								.map((order) => (
									<div className="xl:w-1/4 md:w-1/2 p-4">
										<div className="bg-gray-100 p-6 rounded-lg">
											<img
												className="h-40 rounded w-full object-cover object-center mb-6"
												src={order.productImage}
												alt="content"
											/>
											<h3 className="tracking-widest text-indigo-500 text-md font-bold title-font ">{order.status}</h3>
											<h2 className="text-lg text-gray-900 font-bold title-font mb-4 mt-2">{order.product_name}</h2>
											<p className="leading-relaxed text-base">
												<div className="flex border-t border-b mb-6 border-gray-200 py-2">
													<span className="text-gray-500">Quantity</span>
													<span class="ml-auto text-gray-900">{order.qty}</span>
													
												</div>
												<div className="flex border-t border-b mb-6 border-gray-200 py-2">
													<span className="text-gray-500">Total Amount</span>
													<span class="ml-auto text-gray-900">{order.amount}</span>
												</div>
												<span className="inline-flex ml-14">
													<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
														<Link to="">Status</Link>
													</button>
												</span>
											</p>
										</div>
									</div>
								))}
					</div>
				</div>
			</section>
		</>
	);
};

export default BuyerOrders;
