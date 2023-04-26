/* eslint-disable no-console */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductAPI from "./api/ProductApi";

const BASE_URL = "http://localhost:5003/api/product";
// const BASE_URL = import.meta.env.VITE_K8S_BACKEND_URL;

const CartContext = createContext();

export function CartProvider({ children }) {
	
    const[size,setSize]=useState();

	return (
		<CartContext.Provider
			value={{
				size,
                setSize
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;
