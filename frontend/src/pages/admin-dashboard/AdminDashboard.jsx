import React, { useContext, useState } from "react";
import DashboardTab from "./DashboardTab";
import OrdersTab from "./OrdersTab";
import IncomeTab from "./IncomeTab";
import DispatchedOrdersTab from "./DispatchedOrdersTab";

import AdminContext from "../../contexts/AdminContext";

const AdminDashboard = () => {
	const {} = useContext(AdminContext);

	const [activeTab, setActiveTab] = useState(0);
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const handleTabClick = (index) => {
		setActiveTab(index);
	};

	const handleSidebarToggle = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<div className="w-full min-h-screen flex">
			{/* Main content */}
			<div className="flex-grow p-4">
				{/* Tab headers */}
				<div className="flex mb-4 border-b-2 border-gray-200">
					<div
						className={`text-2xl px-4 cursor-pointer ${activeTab === 0 ? "border-b-2 border-blue-500" : ""}`}
						onClick={() => handleTabClick(0)}
					>
						Dashboard
					</div>
					<div
						className={`text-2xl px-4 cursor-pointer ${activeTab === 1 ? "border-b-2 border-blue-500" : ""}`}
						onClick={() => handleTabClick(1)}
					>
						All Orders
					</div>
					<div
						className={`text-2xl px-4 cursor-pointer ${activeTab === 2 ? "border-b-2 border-blue-500" : ""}`}
						onClick={() => handleTabClick(2)}
					>
						Income
					</div>
					<div
						className={`text-2xl px-4 cursor-pointer ${activeTab === 3 ? "border-b-2 border-blue-500" : ""}`}
						onClick={() => handleTabClick(3)}
					>
						Dispatched Orders
					</div>
				</div>

				{/* Tab content */}
				<div>
					{activeTab === 0 && <DashboardTab />}
					{activeTab === 1 && <OrdersTab />}
					{activeTab === 2 && <IncomeTab />}
					{activeTab === 3 && <DispatchedOrdersTab />}
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
