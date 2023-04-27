import { useContext, useState, useEffect } from "react";
import ProductContext from "../../contexts/ProductContext";
import { RiDeleteBin2Fill } from "react-icons/ri";

const ManageProducts = () => {
	const { products, product, getProduct, deleteProduct } = useContext(ProductContext);
	const supplier=localStorage.getItem("uId");

	return (
		<>
			<div>
				<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
					<table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
						<thead className="bg-gray-50">
							<tr>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Product Name
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Description
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									Supplier
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900">
									
								</th>
								<th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
							</tr>
						</thead>
						{products.filter((elem) => elem.supplier == supplier)
						.map((product, key) => (
							<tbody className="divide-y divide-gray-100 border-t border-gray-100 h-48" key={key}>
								<tr className="hover:bg-gray-50">
									<th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
										<div className="relative">
											<img
												className="h-36 w-36 rounded-lg object-cover object-center"
												src={product.productImage}
												alt=""
											/>
										</div>
									</th>
									<td className="px-6 py-4">
										<div className="inline-flex items-center gap-1 rounded-full px-2 py-1 text-s ">
											{product.productName}
										</div>
									</td>
									<td className="px-6 py-4">{product.description}</td>
									<td className="px-6 py-4">{product.supplierName}</td>

									<td className="px-6 py-4">
										<div>
											{product.variants.map((variant, key) => {
												<ul>
													<li>{variant.size}</li>
													<li>{variant.price}</li>
													<li>{variant.stock}</li>
												</ul>;
											})}
										</div>
									</td>
									<td className="px-6 py-4">
										<div>
											<button onClick={() => deleteProduct(product._id)}>
												<RiDeleteBin2Fill className="fill-red-600 w-[20px] h-[20px] hover:fill-red-500 -ml-5 " />
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

export default ManageProducts;
