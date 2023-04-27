import React, { useContext } from "react";

import OrderContext from "../../contexts/OrderContext";
import { RiDeleteBin2Fill } from "react-icons/ri";
import OrderAPI from "../../contexts/api/OrderAPI";
import makeToast from "../../components/toast";

const BuyerPendingOrders = () => {
	const { orders, refetchOrders } = useContext(OrderContext);
	const stripId = localStorage.getItem("stripeUserId");

	// Cancel Order
	const cancelOrder = async (orderId) => {
		try {
			const { data } = await OrderAPI.deleteOrder(orderId);
			makeToast({ type: "success", message: "Order Canceled" });
			refetchOrders();
		} catch (error) {
			console.log(error);
			makeToast({ type: "error", message: "Something went wrong" });
		}
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Pending Orders</h1>
			<div>
				<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text   gray-900 "></th>

								<th scope="col" className="px-6 py-4 font-bold text-black">
									Unit Price
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Status
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Quantity
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Total
								</th>
								<th scope="col" className="px-6 py-4 font-bold text-black">
									Action
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-100 border-t border-gray-100 h-48">
							{orders &&
								orders
									.filter((elem) => elem.stripeUserId == stripId && elem.status == "pending")
									.map((elem) => (
										<tr className="hover:bg-gray-50">
											<th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
												<div className="relative">
													<img
														className="h-36 w-36 rounded-lg object-cover object-center"
														src={elem.productImage}
														alt=""
													/>
												</div>
												<div className="text-s mt-[50px]">
													<div className="text-gray-700 font-semibold">Name</div>
													<div className="text-gray-400">{elem.product_name}</div>
												</div>
											</th>

											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.price}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full text-red-500 text-xl font-bold ">
													{elem.status}
												</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.qty}</div>
											</td>
											<td className="px-6 py-4">
												<div className="inline-flex items-center rounded-full px- py-1 text-xl ">{elem.amount}</div>
											</td>

											<td className="px-6 py-4">
												<div>
													<button onClick={() => cancelOrder(elem._id)}>
														<RiDeleteBin2Fill className="fill-red-600 w-[20px] h-[20px] hover:fill-red-500 " />
													</button>
												</div>
											</td>
										</tr>
									))}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
};

export default BuyerPendingOrders;
