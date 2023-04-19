import React, { useContext } from "react";
import { Link } from "react-router-dom";

const BuyerDashboard = () => {
	return (
		<>
			<div className="flex flex-col w-1/6 h-screen right bg-slate-100 ml-6 mt-8 rounded-3xl">
				<div className="flex flex-col items-center justify-center mt-24">
					<hr></hr>
					<Link
						to="/buyer"
						className="flex items-center justify-center w-2/4 h-12 text-xl font-bold text-white bg-primary-green rounded-md hover:bg-green-500 "
					>
						Dashboard
					</Link>
					<Link
						to="/buyer-dashboard"
						className="flex items-center justify-center w-2/4 h-12 mt-5 text-xl font-bold text-white bg-primary-green rounded-md hover:bg-green-500"
					>
						My Profile
					</Link>
					<Link
						to="/buyer-dashboard"
						className="flex items-center justify-center w-2/4 h-12 mt-5 text-xl font-bold text-white bg-primary-green rounded-md hover:bg-green-500"
					>
						My Orders
					</Link>
					<Link
						to="/buyer-dashboard"
						className="flex items-center justify-center w-2/4 h-12 mt-5 text-xl font-bold text-white bg-primary-green rounded-md hover:bg-green-500"
					>
						Settings
					</Link>
				</div>
				<div className="absolute ml-[35rem] flex-col sm:flex-wrap sm:flex-row justify-center w-1/2">
					<div className="m-5 p-5 sm:p-10 md:p-20 bg-slate-100 drop-shadow-lg bg-no-repeat bg-left-bottom md: rounded-3xl ">
						<img
							src="https://img.icons8.com/color/96/000000/user-menu-male--v1.png"
							alt=""
							className="w-32 h-32 rounded-full aspect-square"
						/>
						<h1 className="text-xl font-bold ml-[10rem] ">Hey,</h1>
					</div>

					<div className="absolute ml-[5rem] flex-col sm:flex-wrap sm:flex-row justify-center mt-2">
						<table>
							<thead className=" border-b-2 border-gray-200 text-black">
								<tr>
									<th className="p-5 text-md font-semibold tracking-normal text-left">Name</th>
									<th className="p-5 text-md font-semibold tracking-wider text-left">Quantity</th>
									<th className="p-5 text-md font-semibold tracking-wider text-left">Price</th>
									<th className="p-5 text-md font-semibold tracking-wider text-left">Status</th>
									<th className="p-5 text-md font-semibold tracking-wider text-left">Location</th>
									<th className="p-5 text-md font-semibold tracking-wider text-left">Status</th>
								</tr>
							</thead>

							<tbody>
								<tr className="bg-gray-50 w-full">
									<td className="p-5 text-base font-medium tracking-wide text-left ">Test</td>
									<td className="p-5 text-base font-medium tracking-normal text-left">Test</td>

									<td className="p-5 text-md font-semibold tracking-wider text-left">Test</td>
									<td className="p-5  font-medium tracking-normal text-left">Test</td>
									<td className="p-5  font-medium tracking-normal text-left">Test</td>
									<td className="p-5  font-medium tracking-normal text-left">Test</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyerDashboard;
