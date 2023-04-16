/* eslint-disable no-console */
import React, { useContext, useState } from "react";
import axios from "axios";
import ProductContext from "../../contexts/ProductContext";

const ProductAdd = () => {
	const [show, setShow] = useState("F");
	const { addProduct } = useContext(ProductContext);
	const [num, setNum] = useState(0);
	const [size, setSize] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState("");
	const [stock, setStock] = useState("");
	const [variant, setVariant] = useState([]);
	const [publicId, setPublicId] = useState("");
	const [url, setUrl] = useState("");
	const [imageData, setimageData] = useState([]);
	const [relData, setrelData] = useState([]);

	const PRESET_NAME = "x3uai9p5";
	const CLOUD_NAME = "dnf7u8aus";

	//const id = localStorage.getItem("uID");

	const submitImage = () => {
		console.log(CLOUD_NAME);
		console.log(PRESET_NAME);
		const data1 = new FormData();
		data1.append("file", image);
		data1.append("upload_preset", PRESET_NAME);
		data1.append("cloud_name", CLOUD_NAME);

		axios
			.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, data1)
			.then((res) => {
				const url1 = res.data.secure_url;
				console.log(url1);
				setUrl(url1);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	function toggleVariant() {
		if (show == "F") {
			setShow("T");
			return;
		}
		setShow("F");
	}

	const handleSubmitVariant = (e) => {
		console.log("starting variant" + size, price, stock);
		e.preventDefault();
		const data = { size, price, stock };
		if (size && price && stock) {
			setVariant((ls) => [...ls, data]);
			setSize("");
			setPrice("");
			setStock("");
		}
		setNum(num + 1);
		setShow("F");
	};
	const handleSubmit1 = (e) => {
		console.log("logs--" + imageData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		//setPublicId('ouxmhvemrulnlnwxe6e0');
		//setUrl('www.google.com');

		//const data={publicId,url}
		////setrelData((ls)=>[...ls,data])

		// Convert image to array
		/*var imageArray = [];
		for (var i = 0; i < e.target.images.files.length; i++) {
			imageArray.push(e.target.images.files[i].name);
		}*/
		const newProduct = {
			productId: "0",
			productName: e.target.productName.value,
			description: e.target.description.value,
			supplier: e.target.supplier.value,
			weight: e.target.weight.value,
			variants: variant,
			productImage: url,
		};
		addProduct(newProduct);
	};

	return (
		<>
			<br></br>
			<br></br>
			<br></br>
			<center>
				<div>
					<div className="text-3xl">Add New Product</div>
					<div className="block p-8 rounded-3xl shadow-lg bg-white max-w-screen-md max-h-full">
						<form onSubmit={handleSubmit}>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Product Name
									</label>

									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="productName"
											aria-describedby="emailHelp123"
											placeholder=""
										></input>
									</div>
								</div>
								<div className="form-group mb-6">
									<label htmlFor="fname">Description</label>
									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="description"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-x-10">
								<div className="form-group mb-10">
									<label htmlFor="fname">Supplier</label>
									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base  border-indigo-500 font-normal text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="supplier"
											aria-describedby="emailHelp123"
											placeholder=""
										></input>
									</div>
								</div>

								<div className="form-group mb-6">
									<label htmlFor="fname">Weight</label>
									<div className="flex ...">
										<input
											type="text"
											className="form-control block w-80 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
											id="weight"
											aria-describedby="emailHelp124"
											placeholder=""
										></input>
									</div>
								</div>
							</div>

							<div className="">
								<div className="form-group mb-6">
									<label className="labelClass" htmlFor="fname">
										Product Image
									</label>

									<div className="form-group mb-6">
										<div className="">
											<input
												type="file"
												className="form-control block w-72 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
												id="image"
												aria-describedby="emailHelp123"
												placeholder=""
												onChange={(e) => setImage(e.target.files[0])}
											></input>
											<br></br>
											<button className="bg-primary-green px-2" onClick={submitImage}>
												upload
											</button>
										</div>
									</div>
								</div>
							</div>

							{show === "F" ? (
								<div>
									<div className="bg-green-300 cursor-pointer w-96 rounded-3xl" onClick={() => toggleVariant()}>
										Add Variants
									</div>
									<br></br>
								</div>
							) : (
								<div>
									<div className="bg-red-300 cursor-pointer w-96 rounded-3xl" onClick={() => toggleVariant()}>
										Close
									</div>
									<br></br>
								</div>
							)}
							{show === "T" ? (
								<div>
									<div>
										<div className="">
											<div className="form-group mb-6">
												<label className="labelClass" htmlFor="fname">
													Size
												</label>

												<div className="form-group mb-6">
													<input
														type="text"
														className="form-control block w-48 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="size"
														aria-describedby="emailHelp123"
														placeholder=""
														value={size}
														onChange={(e) => setSize(e.target.value)}
													></input>
												</div>
											</div>
										</div>
										<div className="">
											<div className="form-group mb-6">
												<label className="labelClass" htmlFor="fname">
													Price
												</label>

												<div className="form-group mb-6">
													<input
														type="text"
														className="form-control block w-48 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="price"
														aria-describedby="emailHelp123"
														placeholder=""
														value={price}
														onChange={(e) => setPrice(e.target.value)}
													></input>
												</div>
											</div>
										</div>
										<div className="">
											<div className="form-group mb-6">
												<label className="labelClass" htmlFor="fname">
													Stock
												</label>

												<div className="form-group mb-6">
													<input
														type="text"
														className="form-control block w-48 px-3 py-1.5 text-base border-indigo-500 font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
														id="stock"
														aria-describedby="emailHelp123"
														placeholder=""
														value={stock}
														onChange={(e) => setStock(e.target.value)}
													></input>
												</div>
											</div>
										</div>

										<div>
											<button className="bg-blue-400 rounded-3xl shadow-lg w-36" onClick={handleSubmitVariant}>
												SAVE
											</button>
										</div>
									</div>
								</div>
							) : (
								variant.map((a) => (
									<div className="h-auto rounded-3xl shadow-lg py-1" key={a.size}>
										<h3>Product Variant-{num}</h3>
										<br></br>
										<div className="ml-36 flex ">
											<li className="px-2">size -{a.size}</li>
											<li className="px-2">price-{a.price}</li>
											<li className="px-2">stock-{a.stock}</li>
											<br></br>
										</div>
									</div>
								))
							)}

							<div className="form-group form-check text-center mb-6"></div>
							<button
								type="submit"
								className="w-full px-6 py-2.5  bg-primary-green  text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
							>
								ADD
							</button>
						</form>
					</div>
				</div>
			</center>
		</>
	);
};

export default ProductAdd;
