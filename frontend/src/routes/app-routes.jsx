import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";

// Pages

import { Sample, Home, Checkout, Payment, PaymentSuccess } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/sample" element={<Sample />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/payment/success/:paymentId" element={<PaymentSuccess />} />
					<Route path="/payment/:orderId" element={<Payment />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
