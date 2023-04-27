import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { BsArrowRightCircleFill } from "react-icons/bs";
const Cart = () => {
	const local = JSON.parse(localStorage.getItem("cart"));
	const [CartItems, setCartItems] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		setCartItems(local);
	}, []);

	const removeItem = (key) => {
		CartItems.splice(-1, key);
		// eslint-disable-next-line no-console
		console.log("new Array" + CartItems);
		localStorage.setItem("cart", JSON.stringify(CartItems));
		localStorage.setItem("size", CartItems.length);
		alert("Item removed from the Cart...!");
		window.location.reload(true);
	};

	const sendCheckout = (items) => {
		localStorage.setItem("order", JSON.stringify(items));
		navigate("/checkout");
	};

	return (
		<>
			<div>
				<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Seller
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Unit Price
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Option
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Quantity
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Total
								</th>
							</tr>
						</thead>
						{CartItems.map((items, key) => (
							<tbody className="divide-y divide-gray-100 border-t border-gray-100 h-48" key={key}>
								<tr className="hover:bg-gray-50">
									<th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
										<div className="relative">
											<img
												className="h-36 w-36 rounded-lg object-cover object-center"
												src={items.productImage}
												alt=""
											/>
										</div>
										<div className="text-s mt-[50px]">
											<div className="font-medium text-gray-700 font-semibold">{items.product_name}</div>
											<div className="text-gray-400">{items.productDescription}</div>
										</div>
									</th>
									<td className="px-6 py-4">
										<div className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-s ">
											{items.supplier}
										</div>
									</td>
									<td className="px-6 py-4">{items.price}</td>
									<td className="px-6 py-4">
										<div>{items.size}</div>
									</td>
									<td className="px-6 py-4">
										<div>{items.qty}</div>
									</td>
									<td className="px-6 py-4">
										<div>{items.total}</div>
									</td>
									<td className="px-6 py-4">
										<div>
											<button
												onClick={() => sendCheckout(items)}
												className="bg-primary-green hover:bg-green-600 text-white w-auto py-1 px-2 rounded-lg"
											>
												<div className="flex gap-2">
													<div>Checkout</div>
													<div className="mt-0.5">
														<BsArrowRightCircleFill className="fill-green-200" />
													</div>
												</div>
											</button>
										</div>
									</td>
									<td className="px-6 py-4">
										<div>
											<button onClick={() => removeItem(key)}>
												<RiDeleteBin2Fill className="fill-red-600 w-[20px] h-[20px] hover:fill-red-500 " />
											</button>
										</div>
									</td>
								</tr>
							</tbody>
						))}
					</table>
				</div>
			</div>
		</>
	);
};

export default Cart;
