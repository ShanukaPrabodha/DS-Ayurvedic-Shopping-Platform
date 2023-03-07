import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PrivateRoute from "./PrivateRoute";
// import CheckLoginStatus from "./CheckLoginStatus";

// Components
import Header from "../components/Header";

// Pages

import { Sample, Home } from "../pages";

const AppRoutes = () => {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					{/* Public Routes */}
					<Route path="/" element={<Home />} />
					<Route path="/sample" element={<Sample />} />
				</Routes>
			</Router>
		</>
	);
};

export default AppRoutes;
