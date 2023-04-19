import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import SellerContext from "../../contexts/SellerContext";

const SellerRegister = () => {
	const { SellerRegister } = useContext(SellerContext);
	const [nameError, setNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [mobileError, setMobileError] = useState("");
	const [nicError, setNicError] = useState("");
	const [addressError, setAddressError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newSeller = {
			name: e.target.name.value,
			email: e.target.email.value,
			contact: e.target.contact.value,
			nic: e.target.nic.value,
			address: e.target.address.value,
			password: e.target.password.value,
		};

		SellerRegister(newSeller);
	};

	let nameregext = /^[a-z A-Z]+$/;
	let emailregext =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	let mobileregext = /^\+?[0-9]\d{9}$/;
	let nicregext = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
	let addressregext = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
	let passwordregext = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

	// User Name Validation
	const checkName = () => {
		let name = document.getElementById("name").value;
		if (nameregext.test(name)) {
			setNameError("");
		} else {
			setNameError("Please Enter Valid Name");
		}
	};

	// Email Validation
	const checkEmail = () => {
		let email = document.getElementById("email").value;
		if (emailregext.test(email)) {
			setEmailError("");
		} else {
			setEmailError("Please Enter valid email");
		}
	};

	// Mobile Number Validation
	const checkMobile = () => {
		let mobile = document.getElementById("contact").value;
		if (mobileregext.test(mobile)) {
			setMobileError("");
		} else {
			setMobileError("Please Enter valid mobile number");
		}
	};

	// NIC Validation
	const checkNic = () => {
		let nic = document.getElementById("nic").value;
		if (nicregext.test(nic)) {
			setNicError("");
		} else {
			setNicError("Please Enter valid NIC number");
		}
	};

	// Address Validation
	const checkAddress = () => {
		let address = document.getElementById("address").value;
		if (addressregext.test(address)) {
			setAddressError("");
		} else {
			setAddressError("Please Enter valid address");
		}
	};

	// Password Validation
	const checkPassword = () => {
		let password = document.getElementById("password").value;
		if (passwordregext.test(password)) {
			setPasswordError("");
		} else {
			setPasswordError("Minimum five characters, at least one Upper letter and one number");
		}
	};

	return (
		<>
			

			<form onSubmit={handleSubmit}>
				<div className="flex justify-center h-full max-w-4xl mx-auto mt-20 bg-white rounded-lg shadow-xl">
					<div className="left bg-white rounded-lg">
						<div className="mt-32 ml-16 ">
							<h1 className="text-5xl text-black">
								Welcome to<br></br> iHurb
							</h1>
						</div>
						<div className="img ml-3 mt-16">
							<img className="object-cover w-100 h-56" src="/seller.svg" alt="img" />
						</div>
					</div>

					<div className="right">
						<div className="ml-20 mr-20 mt-18">
							<h1 className="mb-10 text-2xl text-black font-bold text-center">As a Seller Register Here..</h1>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Name</label>
								<input
									id="name"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Name"
									onChange={() => {
										checkName();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{nameError}</span>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Email</label>
								<input
									id="email"
									type="email"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Email"
									onChange={() => {
										checkEmail();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{emailError}</span>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Mobile</label>
								<input
									id="contact"
									type="number"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Mobile Number"
									onChange={() => {
										checkMobile();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{mobileError}</span>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">NIC</label>
								<input
									id="nic"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your NIC Number"
									onChange={() => {
										checkNic();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{nicError}</span>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Address</label>
								<input
									id="address"
									type="text"
									className="w-80 px-4 py-2 text-sm border rounded-md bg bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Address"
									onChange={() => {
										checkAddress();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{addressError}</span>
							<br></br>
							<div>
								<label className="block mb-2 text-sm font-bold text-black">Password</label>
								<input
									id="password"
									className="w-80 px-4 py-2 text-sm border rounded-md bg-slate-100 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
									placeholder="Please Enter Your Password"
									type="password"
									onChange={() => {
										checkPassword();
									}}
								/>
							</div>
							<span className="text-red-500 text-sm">{passwordError}</span>

							<div className="flex items-center justify-center gap-4">
								<button className="bg-primary-green hover:bg-green-500 text-white font-bold mt-10  w-60 py-1.5  rounded-xl">
									Register
								</button>
							</div>
							<br></br>
							<div className="text-center mb-10">
								<Link to="/seller/login" className="inline-block text-sm text-green-700 align-baseline">
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

export default SellerRegister;
