import React from "react";

const OrdersTab = () => {
	const orders = [
		{
			_id: "6437b5d8552f72a2f90a2105",
			stripeUserId: "cus_NhCuFcVQHkHfz5",
			products: [
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
			],
			amount: 1363.95,
			status: "pending",
			isPaid: true,
			createdAt: "2023-04-13T07:57:12.663Z",
			updatedAt: "2023-04-13T07:57:25.338Z",
		},
		{
			_id: "6437b5d8552f72a2f90a2105",
			stripeUserId: "cus_NhCuFcVQHkHfz5",
			products: [
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
			],
			amount: 1363.95,
			status: "confirmed",
			isPaid: false,
			createdAt: "2023-04-13T07:57:12.663Z",
			updatedAt: "2023-04-13T07:57:25.338Z",
		},
	];
	return (
		<div className="mx-20">
			{/* Show all orders in a tailwind table */}

			{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Product name
							</th>
							<th scope="col" className="px-6 py-3">
								Color
							</th>
							<th scope="col" className="px-6 py-3">
								Category
							</th>
							<th scope="col" className="px-6 py-3">
								Price
							</th>
							<th scope="col" className="px-6 py-3">
								<span className="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Apple MacBook Pro 13
							</th>
							<td className="px-6 py-4">Silver</td>
							<td className="px-6 py-4">Laptop</td>
							<td className="px-6 py-4">$2999</td>
							<td className="px-6 py-4 text-right">
								<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									Edit
								</a>
							</td>
						</tr>
						<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Microsoft Surface Pro
							</th>
							<td className="px-6 py-4">White</td>
							<td className="px-6 py-4">Laptop PC</td>
							<td className="px-6 py-4">$1999</td>
							<td className="px-6 py-4 text-right">
								<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									Edit
								</a>
							</td>
						</tr>
						<tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
							<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
								Magic Mouse 2
							</th>
							<td className="px-6 py-4">Black</td>
							<td className="px-6 py-4">Accessories</td>
							<td className="px-6 py-4">$99</td>
							<td className="px-6 py-4 text-right">
								<a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
									Edit
								</a>
							</td>
						</tr>
					</tbody>
				</table>
			</div> */}

			<div className="flex flex-col mt-5 mx-5">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Order ID
										</th>

										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Customer ID
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Amount (LKR)
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Status
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Is Paid
										</th>

										{/* Update and Delete icon */}
										{/* <th scope="col" className="relative px-6 py-3">
											<span className="sr-only">Edit</span>
										</th> */}
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{orders.map((order) => (
										<tr key={order._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="text-sm font-medium text-gray-900">{order._id}</div>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="text-sm font-medium text-gray-900">{order.stripeUserId}</div>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="text-sm font-medium text-gray-900">{order.amount}</div>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<button
														className="text-gray-800 font-bold py-1 px-2 rounded inline-flex items-center border border-gray-300 hover:bg-gray-100"
														onClick={() => updateStatus(order._id)}
													>
														{/* Pending, Confirmed, Dispatched, Delivered */}
														{order.status === "pending" ? (
															<span className="text-yellow-500">{order.status}</span>
														) : order.status === "confirmed" ? (
															<span className="text-blue-500">{order.status}</span>
														) : order.status === "dispatched" ? (
															<span className="text-green-500">{order.status}</span>
														) : (
															<span className="text-red-500">{order.status}</span>
														)}
													</button>
												</div>
											</td>

											<td className="px-6 py-4 whitespace-nowrap">
												<div className="flex items-center">
													<div className="text-sm font-bold text-gray-900">
														{order.isPaid ? (
															<span className="text-green-500">Paid</span>
														) : (
															<span className="text-red-500">Not Paid</span>
														)}
													</div>
												</div>
											</td>

											{/* Delete icon */}
											{/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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

export default OrdersTab;
