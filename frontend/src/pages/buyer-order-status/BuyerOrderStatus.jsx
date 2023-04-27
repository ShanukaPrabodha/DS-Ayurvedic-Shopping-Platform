import React, { useContext, useState } from "react";
import BuyerContext from "../../contexts/BuyerContext";
import OrderContext from "../../contexts/OrderContext";
import { useParams } from "react-router-dom";

const BuyerOrderStatus = () => {
	const { order } = useContext(OrderContext);

	const [status, setStatus] = useState(null);

	const stripId = localStorage.getItem("stripeUserId");

	const { id } = useParams();

	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
					<>
						<div className="flex mx-auto flex-wrap mb-20">
							<div>
								<a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-green-500 text-green-500 tracking-wider rounded-t">
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										className="w-5 h-5 mr-3"
										viewBox="0 0 24 24"
									>
										<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
									</svg>
									Pending
								</a>
							</div>

							<a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 mr-3"
									viewBox="0 0 24 24"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
								</svg>
								Confirmed
							</a>
							<a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 mr-3"
									viewBox="0 0 24 24"
								>
									<circle cx="12" cy="5" r="3"></circle>
									<path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
								</svg>
								Dispatched
							</a>
							<a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider">
								<svg
									fill="none"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="w-5 h-5 mr-3"
									viewBox="0 0 24 24"
								>
									<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
									<circle cx="12" cy="7" r="4"></circle>
								</svg>
								Delivered
							</a>
						</div>
						<img
							className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
							alt="hero"
							// src={orders.productImage}
						/>
						<div className="flex flex-col text-center w-full">
							<h1 className="text-xl font-medium title-font mb-4 text-gray-900"></h1>
							<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
								Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke
								farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism
								food truck ugh squid celiac humblebrag.
							</p>
						</div>
					</>
				</div>
			</section>
		</>
	);
};

export default BuyerOrderStatus;
