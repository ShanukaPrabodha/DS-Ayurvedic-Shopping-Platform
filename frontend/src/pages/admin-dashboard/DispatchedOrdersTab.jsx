/* eslint-disable no-console */
import { useContext } from "react";
import OrderAPI from "../../contexts/api/OrderAPI";
import makeToast from "../../components/toast";
import Spinner from "../../components/spinner";
import { MdPaid, MdPending } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import OrderContext from "../../contexts/OrderContext";

const DispatchedOrdersTab = () => {
	const { orders, ordersLoading, refetchOrders } = useContext(OrderContext);

	// Change order status
	const updateStatus = async (orderId) => {
		try {
			const { data } = await OrderAPI.changeOrderStatus(orderId, "delivered");
			makeToast({ type: "success", message: "Order status updated successfully" });
			refetchOrders();
		} catch (error) {
			console.log(error);
			makeToast({ type: "error", message: "Something went wrong" });
		}
	};

	return (
		<div className="mx-20">
			{ordersLoading && <Spinner />}

			<div className="flex flex-col mt-5 mx-5">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						{/* Section for different icons meaning */}
						<div className="flex flex-row justify-between items-center mt-4 mb-4 border-2 border-gray-400 border-dashed rounded-lg p-4">
							<div className="flex flex-row items-center">
								<div className="flex flex-row items-center">
									<span className="text-green-500 text-4xl">
										<AiFillCheckCircle />
									</span>
									<p className="ml-2 border-r-2 border-gray-400 pr-4">Delivered</p>

									<span className="text-purple-500 text-4xl ml-4">
										<FaShippingFast />
									</span>
									<p className="ml-2 border-r-2 border-gray-400 pr-4">Dispatched</p>

									<span className="text-red-500 text-4xl ml-4">
										<MdPaid />
									</span>
									<p className="ml-2 border-r-2 border-gray-400 pr-4">Not Paid</p>

									<span className="text-green-500 text-4xl ml-4">
										<MdPaid />
									</span>
									<p className="ml-2">Paid</p>
								</div>
							</div>
						</div>
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200 text-md">
								<thead className="bg-gray-50">
									<tr>
										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Order ID
										</th>

										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Customer ID
										</th>
										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Amount (LKR)
										</th>
										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Is Paid
										</th>
										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Status
										</th>
										<th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
											Actions
										</th>

										{/* Update and Delete icon */}
										{/* <th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th> */}
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{orders &&
										orders
											.filter((order) => order.status === "dispatched")
											.map((order) => (
												<tr key={order._id}>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className=" font-medium text-gray-900">{order._id}</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className=" font-medium text-gray-900">{order.stripeUserId}</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className=" font-medium text-gray-900">{order.amount}</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className=" font-bold text-gray-900">
																{order.isPaid ? (
																	<span className="text-green-500 text-4xl">
																		<MdPaid />
																	</span>
																) : (
																	<span className="text-red-500 text-4xl">
																		<MdPaid />
																	</span>
																)}
															</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className=" font-bold text-gray-900">
																{/* Pending, Confirmed, Dispatched, Delivered */}
																{order.status === "pending" ? (
																	<span className="text-yellow-500 text-4xl">
																		<MdPending />
																	</span>
																) : order.status === "confirmed" ? (
																	<span className="text-blue-500 text-4xl">
																		<GiConfirmed />
																	</span>
																) : order.status === "dispatched" ? (
																	<span className="text-purple-500 text-4xl">
																		<FaShippingFast />
																	</span>
																) : (
																	<span className="text-green-500 text-4xl">
																		<AiFillCheckCircle />
																	</span>
																)}
															</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<button
																className="text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
																onClick={() => updateStatus(order._id)}
																// disable if status is confirmed and isPaid is false
																disabled={order.status !== "dispatched" || !order.isPaid}
															>
																{order.status !== "delivered" ? (
																	<span className="text-green-500">Deliver</span>
																) : (
																	<span className="text-gray-500">Delivered</span>
																)}
															</button>
														</div>
													</td>

													{/* Delete icon */}
													{/* <td className="px-6 py-4 whitespace-nowrap text-right  font-medium">
												<p
													href="#"
													className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
													onClick={() => deleteHotelOwner(order._id)}
												>
													Delete
												</p>
											</td> */}
												</tr>
											))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DispatchedOrdersTab;
