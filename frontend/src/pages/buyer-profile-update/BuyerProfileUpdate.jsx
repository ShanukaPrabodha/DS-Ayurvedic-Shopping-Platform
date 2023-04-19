import React, { useContext } from "react";
import { Link } from "react-router-dom";
import BuyerContext from "../../contexts/BuyerContext";

const BuyerProfileUpdate = () => {
	return (
		<>
			<form>
				<div className="flex justify-center h-full max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-xl">
					<div className=" left  rounded-lg">
						<div className="mt-32 ml-16 ">
							<div className="h-56 w-56 rounded-full overflow-hidden bg-gray-200 ">
								<img src="https://source.unsplash.com/300x300/?boy" />
							</div>
						</div>
					</div>

					<div className="right">
						<div className="ml-20 mr-20 mt-18">
							<h1 className="mb-10 text-2xl text-primary-blue font-bold text-center">Update Your Account Here..</h1>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Name</label>
								<input
									id="name"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Name"
								/>
							</div>

							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Email</label>
								<input
									id="email"
									type="email"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Email"
								/>
							</div>

							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Mobile</label>
								<input
									id="contact"
									type="number"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Mobile Number"
								/>
							</div>

							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">NIC</label>
								<input
									id="nic"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your NIC Number"
								/>
							</div>

							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Address</label>
								<input
									id="address"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Address"
								/>
							</div>

							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Password</label>
								<input
									id="password"
									className="w-80 px-4 py-2 text-sm border rounded-md bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Password"
									type="password"
								/>
							</div>

							<div className="flex items-center justify-center gap-4">
								<button className="bg-primary-green hover:bg-green-500 text-white font-bold mt-10  w-60 py-1.5  rounded-xl">
									Register
								</button>
							</div>
							<br></br>
							<div className="text-center mb-10">
								<Link to="/buyer/login" className="inline-block text-sm text-green-700 align-baseline">
									Already Registered ? Login Here !
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default BuyerProfileUpdate;
