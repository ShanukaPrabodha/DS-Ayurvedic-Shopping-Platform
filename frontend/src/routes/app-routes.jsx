import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

// Pages

import { Sample, Home, Checkout, Payment, PaymentSuccess, AdminLogin, ProductAdd ,ProductDisplay } from "../pages";


const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<div className="min-h-screen">
					<Routes>
						{/* Public Routes */}
						<Route path="/" element={<Home />} />
						<Route path="/sample" element={<Sample />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/payment/success/:paymentId" element={<PaymentSuccess />} />
						<Route path="/payment/:orderId" element={<Payment />} />


						{/*Product Routes*/}
						<Route path="/product-add" element={<ProductAdd />} />
						<Route path="/product-display" element={<ProductDisplay />} />


						{/* Check Login Status Admin */}
						<Route exact path="/admin/login" element={<CheckLoginStatus />}>
							<Route exact path="/admin/login" element={<AdminLogin />} />
						</Route>

						{/* Admin Private Routes */}
						<Route exact path="/admin" element={<PrivateRoute permissionLevel="ADMIN" />}>
							<Route exact path="/admin" element={<Home />} />
							{/* <Route exact path="/admin/edit" element={<AdminEdit />} /> */}
						</Route>

					</Routes>
				</div>
				<Footer />
			</Router>
		</>
	);
};

export default AppRoutes;
