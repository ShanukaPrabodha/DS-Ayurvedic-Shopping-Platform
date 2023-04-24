import { useContext, useEffect, useState } from "react";
import Spinner from "../../components/spinner";
import OrderContext from "../../contexts/OrderContext";

const IncomeTab = () => {
	const { orders, ordersLoading, commission } = useContext(OrderContext);

	const [totalIncome, setTotalIncome] = useState(0);

	// Calculate total income
	useEffect(() => {
		if (orders) {
			let total = 0;
			// filter isPaid orders
			orders
				.filter((order) => order.isPaid)
				.forEach((order) => {
					total += order.amount * commission;
				});
			setTotalIncome(total.toFixed(2));
		}
	}, [orders]);

	return (
		<div className="mx-20">
			{ordersLoading && <Spinner />}

			<div className="flex flex-col mt-5 mx-5">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						{/* Total income */}
						<div className="flex flex-row justify-between items-center mt-4 mb-4 border-2 border-gray-400 border-dashed rounded-lg p-4">
							<div className="flex flex-row items-center justify-between w-full">
								<div className="flex flex-row items-center text-2xl font-bold">
									<p className="ml-2 border-r-2 border-gray-400 pr-4">Total Income</p>
									<p className="ml-2 pr-4">LKR {totalIncome}</p>
								</div>
								{/* Commission */}
								<div className="flex flex-row items-center text-2xl font-bold ml-4">
									<p className="ml-2 border-r-2 border-gray-400 pr-4">Commission</p>
									<p className="ml-2 pr-4">{commission * 100}%</p>
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
											Income (LKR)
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{orders &&
										orders
											.filter((order) => order.isPaid)
											.map((order) => (
												<tr key={order._id}>
													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="font-medium text-gray-900">{order._id}</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="font-medium text-gray-900">{order.stripeUserId}</div>
														</div>
													</td>

													<td className="px-6 py-4 whitespace-nowrap">
														<div className="flex items-center">
															<div className="font-medium text-gray-900">{(order.amount * commission).toFixed(2)}</div>
														</div>
													</td>
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

export default IncomeTab;
