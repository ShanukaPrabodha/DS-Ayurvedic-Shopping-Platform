import React, { useContext } from "react";
import { Link } from "react-router-dom";

import BuyerContext from "../../contexts/BuyerContext";

const BuyerLogin = () => {
	const { BuyerLogin } = useContext(BuyerContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newBuyer = {
			email: e.target.email.value,
			password: e.target.password.value,
		};

		BuyerLogin(newBuyer);
	};

	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Buyer Login</h1>
			<form onSubmit={handleSubmit}>
				<div className="flex justify-center h-full max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-xl">
					<div className=" left bg-primary-blue  rounded-lg">
						<div className="mt-32 ml-16 ">
							<h1 className="text-5xl text-black ">
								Welcome <br></br> Back
							</h1>
						</div>
						<div className="img ml-3 mt-20">
							<img className="object-cover w-100 h-56" src="/buyerlogin.svg" alt="img" />
						</div>
					</div>

					<div className="right">
						<div className="ml-20 mr-20 mt-28">
							<h1 className="mb-10 text-2xl text-primary-blue font-bold text-center">Login Here..</h1>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Email</label>
								<input
									id="email"
									type="email"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
									placeholder="Please enter your email"
								/>
							</div>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Password</label>
								<input
									id="password"
									className="w-80 px-4 py-2 text-sm border rounded-md bg-slate-100 focus:border-green-700 focus:outline-none focus:ring-1 focus:ring-green-700"
									placeholder="Please enter your password"
									type="password"
								/>
							</div>
							<p className="mt-4 ml-40 text-sm text-green-700 hover:underline cursor-pointer">Forgot your password?</p>

							<div className="flex items-center justify-center gap-4">
								<button className="bg-green-500 hover:bg-green-700 text-white font-bold mt-6  w-60 py-1.5  rounded-xl">
									Login
								</button>
							</div>

							<div className="text-center mt-4">
								<Link to="/buyer/register" className="inline-block text-sm text-green-700 align-baseline">
									Create an Account.
								</Link>
							</div>
						</div>
					</div>
				</div>
			</form>
		</>
	);
};

export default BuyerLogin;
