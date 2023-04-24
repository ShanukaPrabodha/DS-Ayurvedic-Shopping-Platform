import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BuyerContext from "../../contexts/BuyerContext";

const BuyerDashboard = () => {
	const { buyer, getOneBuyer } = useContext(BuyerContext);

	const id = localStorage.getItem("uId");
	// console.log(id);
	getOneBuyer(id);

	return (
		<>
			<div className="absolute ml-[35rem] flex-col sm:flex-wrap sm:flex-row justify-center w-1/2">
				<div className="flex-col px-10 w-auto md:w-50 py-6 bg-gray-200 rounded-2xl mt-10">
					<div className="flex">
						<div>
							<div className="h-28 w-28 rounded-full overflow-hidden bg-gray-200 ml-14">
								<img src="https://source.unsplash.com/300x300/?boy" alt="" className="" />
							</div>
							<div className="ml-14 mt-2">
								<label className="block">
									<div className="sr-only">Choose profile photo</div>
									<input
										type="file"
										className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-green-700 hover:file:bg-violet-100"
									/>
								</label>
							</div>
							<div className="text-lg font-medium text-black cursor-pointer ml-6 mt-2">
								<b>{buyer.name}</b>
							</div>
							<div className=" italic text-gray-500 ml-4">{buyer.email} </div>
						</div>
						<div className="flex mt-10">
							<div className="">
								<button className="flex ml-auto text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full">
									<Link to={`/buyer/profile/${id}`}>Update</Link>
								</button>
							</div>
							<div>
								<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
									<Link to="">View Profile</Link>
								</button>
							</div>
							<div>
								<button className="flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded-full ml-10">
									<Link to={`/buyer/orders/${id}`}>My Orders</Link>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="text-gray-600 body-font">
					<div clasNames="container px-2 py-20 mx-auto">
						<div className="flex flex-col text-center w-full mb-10">
							<h1 className="text-2xl font-medium title-font  text-gray-900 tracking-widest mt-6">PENDING ORDERS</h1>
						</div>
						<div className="flex flex-wrap -m-4">
							<div className="p-4 lg:w-1/2">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<img
										alt="team"
										className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
										src="https://dummyimage.com/200x200"
									/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">Holden Caulfield</h2>
										<h3 className="text-gray-500 mb-3">UI Developer</h3>
										<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<img
										alt="team"
										className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
										src="https://dummyimage.com/201x201"
									/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">Alper Kamu</h2>
										<h3 className="text-gray-500 mb-3">Designer</h3>
										<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<img
										alt="team"
										className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
										src="https://dummyimage.com/204x204"
									/>
									<div className="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">Atticus Finch</h2>
										<h3 className="text-gray-500 mb-3">UI Developer</h3>
										<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													Name
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
							<div className="p-4 lg:w-1/2">
								<div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
									<img
										alt="team"
										className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
										src="https://dummyimage.com/206x206"
									/>
									<div class="flex-grow sm:pl-8">
										<h2 className="title-font font-medium text-lg text-gray-900">Henry Letham</h2>
										<h3 className="text-gray-500 mb-3">Designer</h3>
										<p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
										<span className="inline-flex">
											<a className="text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
												</svg>
											</a>
											<a className="ml-2 text-gray-500">
												<svg
													fill="none"
													stroke="currentColor"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													className="w-5 h-5"
													viewBox="0 0 24 24"
												>
													<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
												</svg>
											</a>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BuyerDashboard;
