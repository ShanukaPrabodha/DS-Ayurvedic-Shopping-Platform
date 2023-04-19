import React, { useState, useContext, useEffect } from "react";
import { ImCross ,ImCart } from "react-icons/im";
import ProductContext from "../../contexts/ProductContext";


export default function productModal({ visible, onClose, product }) {
	const { getProduct } = useContext(ProductContext);
	const[qty,setQty]=useState(0);
	const[total,setTotal]=useState(0.00);
	const [price, setPrice] = useState(0);
	const [size, setSize] = useState();
	const [stock, setStock] = useState();
	const [details,setDetails]=useState({
		productId:product._id,
			 productImage:"",
			 productName:"",
			 supplier:"",
			 size:"",
			 price:"",
			 stock:"",
			 total:""
	});

	const hello = (variant) => {
		setSize(variant.size);
		setPrice(variant.price);
		setStock(variant.stock);

		console.log("size="+size)
		console.log("price="+price)
		console.log("stock="+stock)

		const price2=variant.price*qty;
		setTotal(price2);
	};

	const selectQty =(e)=>{

		setQty(e.target.value);
		console.log(qty);

		setTotal(qty*price);

	}

	const sendDetails=(e)=>{

		const newData={

			_id:product._id,
			product_name:product.productName,
			productImage:product.productImage,
			supplier:product.supplier,
			qty:qty,
			size:size,
			price:price,
			stock:stock,
			total:total
		}

		console.log(newData);


	}




	if (visible == "false") return null;

	return (
		<>
		<div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
			<div className="bg-white rounded-lg w-[auto] h-[auto]">
			<div className="ml-[700px] mt-[12px] mr-auto">
				<button onClick={onClose}>
					<ImCross className="fill-red-600 hover:fill-red-400" />
				</button>	
				</div>
				
				<div className="font-semibold text-3xl pt-1 pb-2 ml-[290px] text-primary-green">Add to Cart</div>
				<div className="md:flex items-strech py-8 md:py-10 lg:py-8 lg:px-8 border-t border-b border-gray-500">
					<div className="md:w-4/12 2xl:w-1/4 w-full mt-[10px]">
						<img
						    id="productImage"
							src={product.productImage}
							alt="Black Leather Bag"
							className="h-48 w-48 object-center object-cover md:block hidden  border-2 border-gray-500 border-spacing-1"
						/>
					</div>
					<div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center lg:ml-[10px]">
						<p id="productImage" className="text-[14px] font-semibold leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">{product.supplier}</p>
						<div className="flex items-center justify-between w-full pt-1">
							<div>
							<div id="productName" className="text-base font-black leading-none text-gray-800 dark:text-white mt-[10px]">{product.productName}</div>
							<div>
								<br></br>
								<div className="text-[14px] font-semibold">select option:</div>
							<div className="lg:grid lg:grid-cols-12 lg:gap-2 lg:w-auto lg:mt-[-10px]">
					{product.variants.map((variant,key) => (
						<div className="">
							<div className="">
								<input
									id={variant._id}
									type="radio"
									value=""
									name="default-radio"
									onChange={() => hello(variant)}
									class="peer opacity-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
								/>
								<label
									for={variant._id}
									className="flex cursor-pointer  bg-gray-200 justify-center items-center h-5 w-5 peer-checked:bg-primary-green peer-checked:text-white text-[17px] text-sm font-medium text-gray-900 dark:text-gray-300"
								>
									{key+1}
								</label>
							</div>
						</div>
					))}
				</div>
							</div>
							</div>
							<div>
								<div className="text-[14px] font-semibold pb-2">select qty</div>	
							<select
							    onChange={selectQty}
								aria-label="Select quantity"
								className="py-2 px-1 border border-gray-500 mr-6 focus:outline-none dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
							>
								<option defaultValue="0">select qty</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
							</select>
							</div>
						</div>
						<br></br>
						<div className="text-[14px] font-semibold leading-3 text-gray-600 dark:text-white pt-2">Size : {size}</div>
						<div className="text-[14px] font-semibold leading-3 text-gray-600 dark:text-white py-4">Price: {price}</div>
						<div className="w-96 text-[14px] font-semibold leading-3 text-gray-600 dark:text-white">Stock: {stock}</div>
						<div className="flex items-center justify-between pt-5">
							<div className="flex itemms-center">
								<button  onClick={sendDetails}
								         className="flex bg-primary-green w-18 rounded-lg px-2 hover:bg-green-400"
								         >
									<div className="text-white py-2">
                                       Add to Cart
									</div>
									<div className="ml-2 mt-1 py-2"><ImCart fill="white"/></div>
								</button>
							</div>
							<div className="mr-2">
								<div className="text-[14px] font-semibold  text-gray-800">Total:</div>
							<div className="text-base font-black leading-none text-gray-800 dark:text-white">රු.{total}.00</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
			
		</div>
		</>
	);
}
