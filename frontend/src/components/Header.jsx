import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="underline font-bold text-blue-600 flex gap-4">
			<Link to="/">Home</Link>
			<Link to="/sample">Sample</Link>
		</div>
	);
};

export default Header;
