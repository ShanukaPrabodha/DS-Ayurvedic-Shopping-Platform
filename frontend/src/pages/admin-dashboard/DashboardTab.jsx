import { useContext, useEffect, useState } from "react";
import OrderContext from "../../contexts/OrderContext";
import ProductAPI from "../../contexts/api/ProductApi";
import { useQuery } from "@tanstack/react-query";

const DashboardTab = () => {
	const { orders, ordersLoading, commission } = useContext(OrderContext);

	const [totalRevenue, setTotalRevenue] = useState(0);
	const [totalOrders, setTotalOrders] = useState(0);
	const [totalProducts, setTotalProducts] = useState(0);

	// Get all products
	const {
		data: products,
		isLoading: productsLoading,
		refetch: refetchOrders,
	} = useQuery(["products"], () => ProductAPI.getProducts(), {
		enabled: true,
		onSuccess: (data) => {
			setTotalProducts(data.data.length);
		},
	});

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
			setTotalRevenue(total.toFixed(2));
			setTotalOrders(orders.length);
		}
	}, [orders]);

	return (
		<div className="bg-gray-100 h-screen">
			<div className="flex flex-wrap justify-between p-6">
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="flex items-center justify-between">
							<div className="text-gray-600">Total Orders</div>
							<div className="text-3xl font-bold">{totalOrders}</div>
						</div>
						<div className="mt-4">
							<span className="text-green-500">
								<i className="fas fa-arrow-up"></i> 15%
							</span>
							<span className="text-gray-600 ml-2">Since last week</span>
						</div>
					</div>
				</div>
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="flex items-center justify-between">
							<div className="text-gray-600">Total Revenue</div>
							<div className="text-3xl font-bold">Rs. {totalRevenue}</div>
						</div>
						<div className="mt-4">
							<span className="text-red-500">
								<i className="fas fa-arrow-down"></i> 5%
							</span>
							<span className="text-gray-600 ml-2">Since last week</span>
						</div>
					</div>
				</div>
				{/* <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="flex items-center justify-between">
							<div className="text-gray-600">Total Users</div>
							<div className="text-3xl font-bold">567</div>
						</div>
						<div className="mt-4">
							<span className="text-green-500">
								<i className="fas fa-arrow-up"></i> 10%
							</span>
							<span className="text-gray-600 ml-2">Since last week</span>
						</div>
					</div>
				</div> */}
				<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
					<div className="bg-white rounded-lg shadow-lg p-6">
						<div className="flex items-center justify-between">
							<div className="text-gray-600">Total Products</div>
							<div className="text-3xl font-bold">{totalProducts}</div>
						</div>
						<div className="mt-4">
							<span className="text-red-500">
								<i className="fas fa-arrow-down"></i> 3%
							</span>
							<span className="text-gray-600 ml-2">Since last week</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardTab;
