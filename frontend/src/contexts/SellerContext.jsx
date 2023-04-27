import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SellerAPI from "./api/SellerAPI";
import makeToast from "../components/toast";

const SellerContext = createContext();

export function SellerProvider({ children }) {
	const [sellers, setSellers] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");

	const [seller, setSeller] = useState({
		name: "",
		email: "",
		contact: "",
		nic: "",
		address: "",
		password: "",
	});

	// Seller Register

	const SellerRegister = async (values) => {
		SellerAPI.register(values)
			.then((response) => {
				setSellers([...sellers, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/seller/login";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err.response.data);
				if (err.response.data.details == "Email already exists") {
					alert("Email already exists");
					makeToast({ type: "error", message: "Email already exists" });
					setMailError(err.response.data.details);
				}
				if (err.response.data.details == "NIC already exists") {
					alert("NIC already exists");
					makeToast({ type: "error", message: "NIC already exists" });
					setNicError(err.response.data.details);
				}
			});
	};

	const SellerLogin = (values) => {
		SellerAPI.login(values)
			.then((response) => {
				localStorage.setItem("stripeUserId", response.data.stripeUserId);
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);
				localStorage.setItem("name", response.data.name );

				makeToast({ type: "success", message: "Login Successful" });
				window.location.href = "/seller";
			})
			.catch((err) => {
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	// Seller Login
	const getOneSeller = (id) => {
		useEffect(() => {
			SellerAPI.getOneSeller(id).then((res) => {
				setSeller(res.data);
			});
		}, []);
	};

	const editSeller = (values) => {
		const newSeller = {
			id: values._id,
			name: values.name,
			email: values.email,
			contact: values.contact,
			nic: values.nic,
			address: values.address,
		};
		SellerAPI.updateSeller(values.id, newSeller)
			.then((response) => {
				makeToast({ type: "success", message: "Profile Updated Successful" });
				window.location.href = "/seller";
			})
			.catch((err) => {
				// eslint-disable-next-line no-console
				console.log(err);
			});
	};

	return (
		<SellerContext.Provider
			value={{
				seller,
				setSeller,
				SellerRegister,
				SellerLogin,
				mailError,
				setMailError,
				setNicError,
				nicError,
				sellers,
				setSellers,
				getOneSeller,
				editSeller,
			}}
		>
			{children}
		</SellerContext.Provider>
	);
}

export default SellerContext;
