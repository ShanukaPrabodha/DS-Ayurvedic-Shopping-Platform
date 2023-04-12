import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
								{/* Checkout */}
								<li className="mr-6">
									<Link to="/checkout" className="text-base font-medium text-white hover:text-gray-300">
										Checkout
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
