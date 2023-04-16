/* eslint-disable no-console */
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import ProductContext from "../../contexts/ProductContext";
import { ImCart } from "react-icons/im";
import ReactStars from "react-rating-stars-component";

const ProductDisplay = () => {
	const { products } = useContext(ProductContext);

	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	return (
		<>
			<section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
				{/*   ✅ Product card 1 - Starts Here 👇*/}
				{products.map((product) => (
					<div
						className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
						key={product._id}
					>
						<a href="#">
							<img src={product.productImage} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
							<div>
								<ReactStars count={5} onChange={ratingChanged} size={24} activeColor="#ffd700" />
							</div>
							<div className="px-4 py-3 w-72">
								<span className="text-gray-400 mr-3 uppercase text-xs">{product.supplier}</span>
								<p className="text-lg font-bold text-black truncate block capitalize">{product.productName}</p>
								<div className="flex items-center">
									<p className="text-lg font-semibold text-black cursor-auto my-3">රු.{product.variants[0].price}.00</p>

									<div className="ml-auto">
										<button>
											<ImCart className="fill-primary-green w-[20px] h-[20px] hover:fill-green-400" />
										</button>
									</div>
								</div>
							</div>
						</a>
					</div>
				))}
			</section>
		</>
	);
};

export default ProductDisplay;
