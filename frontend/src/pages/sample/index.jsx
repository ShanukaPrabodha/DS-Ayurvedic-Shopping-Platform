import React from "react";

const Sample = () => {

	const items=JSON.parse(localStorage.getItem("order"));


	return (
		<>
			<h1 className="mt-5 text-4xl text-center">Sample Page</h1>
			<h1 className="mt-5 text-4xl text-center">{items.product_name}</h1>




		</>
	);
};

export default Sample;
