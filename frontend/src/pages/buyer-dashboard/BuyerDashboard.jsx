import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BuyerContext from "../../contexts/BuyerContext";
import OrderContext from "../../contexts/OrderContext";

const BuyerDashboard = () => {
	const { buyer, getOneBuyer } = useContext(BuyerContext);

	const { orders, refetchOrders } = useContext(OrderContext);
	const id = localStorage.getItem("uId");
	const stripId = localStorage.getItem("stripeUserId");
	getOneBuyer(id);

	//const stripId = localStorage.getItem("stripeUserId");(())

	return (
		<>
			<div className="flex flex-col sm:flex-row justify-center w-full h-full">
				<div className="flex-col px-10 py-6 bg-gray-200 rounded-2xl mt-10 w-1/4">
					<div className="flex items-center">
						<div>
							<div className="h-28 w-28 rounded-full overflow-hidden bg-gray-200 ml-[5rem]">
								<img
									src="https://source.unsplash.com/300x300/?boy"
									alt=""
									className="flex items-center justify-center"
								/>
							</div>

							<div className="text-lg font-medium text-black cursor-pointer ml-6 mt-4">
								<b>{buyer.name}</b>
							</div>
							<div className="italic text-gray-500 ml-4">{buyer.email}</div>
							<div className="flex mt-[4rem]">
								<div>
									<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full">
										<Link to={`/buyer/profile/${id}`}>View Profile</Link>
									</button>
								</div>
								<div className="ml-4">
									<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full">
										<Link to={`/buyer/orders/${id}`}>My Orders</Link>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col sm:flex-wrap sm:flex-row justify-center w-2/3 mt-[2rem]">
					<Link to="/buyer/pending/orders">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addSample.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Pending Orders
							</h1>
						</div>
					</Link>
					<Link to="/buyer/confirm/orders">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addSample.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Confirm Orders
							</h1>
						</div>
					</Link>
					<Link to="/buyer/dispatch/orders">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addSample.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Dispatch Orders
							</h1>
						</div>
					</Link>
					<Link to="/buyer/delivered/orders">
						<div className="m-5 p-5 sm:p-10 md:p-20 bg-white drop-shadow-lg bg-no-repeat bg-left-bottom md:bg-[url('../addSample.png')] rounded-3xl">
							<h1 className="text-primary-blue md:text-white md:bg-black md:bg-opacity-60 md:p-2 rounded-xl font-bold text-lg md:text-3xl hover:underline">
								Delivered Orders
							</h1>
						</div>
						    
					</Link>
				</div>
			</div>
		</>
	);
};

export default BuyerDashboard;
