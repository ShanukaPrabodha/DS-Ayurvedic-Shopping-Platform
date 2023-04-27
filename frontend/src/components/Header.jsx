import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import makeToast from "./toast";
import { ImCart } from "react-icons/im";

const Header = () => {
	const navigate = useNavigate();
	const [size, setSize] = useState();
	const cart = JSON.parse(localStorage.getItem("cart"));

	useEffect(() => {
		setSize(localStorage.getItem("size"));
	}, [localStorage.getItem("cart")]);

	const permissionLevel = localStorage.getItem("permissionLevel");

	const adminLogout = () => {
		localStorage.removeItem("stripeUserId");
		localStorage.removeItem("email");
		localStorage.removeItem("authToken");
		localStorage.removeItem("permissionLevel");
		navigate("/");
		window.location.reload();
		makeToast({ type: "success", message: "Logout Successful" });
	};

	const navigateTo = () => {
		navigate("/product-display");
	};

	return (
		<>
			<div className="bg-primary-green text-2xl">
				<div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
					<div className="pr-16 sm:text-center sm:px-16">
						{/* Nav links */}
						<nav className="flex justify-between">
							<ul className="flex">
								<li className="mr-6">
									<Link to="/" className="text-base font-medium text-white hover:text-gray-300">
										<h1 className="mt-2 mb-2 text-2xl font-bold text-white">iHurb</h1>
									</Link>
								</li>
							</ul>

							<ul className="flex p-1">
								{/* Shop */}
								<li className="mr-6">
									<button onClick={navigateTo} className="text-base font-medium text-white hover:text-gray-300">
										Shop
									</button>
								</li>

								{/* Checkout */}
								{/* <li className="mr-6">
									<Link to="/checkout" className="text-base font-medium text-white hover:text-gray-300">
										Checkout
									</Link>
								</li> */}
								{/* Checkout */}
								<li className="mr-6">
									<span className="absolute ml-1 -mt-2 text-[17px] px-2 rounded-[50%] bg-green-200 -z-0">{size}</span>
									<Link to="/cart">
										<ImCart className="relative fill-white w-[20px] h-[20px] mt-2 hover:fill-green-400" />
									</Link>
								</li>

								{/* Admin */}
								{permissionLevel === "ADMIN" && (
									<li className="mr-6">
										<Link
											to="/admin"
											className="text-base font-bold text-primary-green bg-white rounded-xl px-3 py-1 border-2 border-primary-green hover:border-2 hover:border-white hover:bg-primary-green hover:text-white"
										>
											Admin
										</Link>
									</li>
								)}

								{/* Logout */}
								{permissionLevel && (
									<li className="mr-6 flex items-center">
										<HiOutlineLogout
											onClick={adminLogout}
											className="text-3xl text-white cursor-pointer hover:text-gray-300"
										/>
									</li>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
