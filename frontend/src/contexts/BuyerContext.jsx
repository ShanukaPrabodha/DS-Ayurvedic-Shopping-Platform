import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import BuyerAPI from "./api/BuyerAPI";
import makeToast from "../components/toast";

const BuyerContext = createContext();

export function BuyerProvider({ children }) {
	const [buyers, setBuyers] = useState([]);
	const [mailError, setMailError] = useState("");
	const [nicError, setNicError] = useState("");
	const [message, setMessage] = useState(null);

	const [buyer, setBuyer] = useState({
		name: "",
		email: "",
		contact: "",
		nic: "",
		address: "",
		password: "",
	});

	// Buyer Register

	const BuyerRegister = async (values) => {
		BuyerAPI.register(values)
			.then((response) => {
				setBuyers([...buyers, response.data]);
				makeToast({ type: "success", message: "Registration Successful" });
				window.location.href = "/buyer/login";
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

	// Buyer Login
	const BuyerLogin = (values) => {
		BuyerAPI.login(values)
			.then((response) => {
				localStorage.setItem("stripeUserId", response.data.stripeUserId);
				localStorage.setItem("uId", response.data._id);
				localStorage.setItem("email", response.data.email);
				localStorage.setItem("authToken", response.data.token);
				localStorage.setItem("permissionLevel", response.data.permissionLevel);

				makeToast({ type: "success", message: "Login Successful" });
				window.location.href = "/buyer";
			})
			.catch((err) => {
				makeToast({ type: "error", message: "Invalid Email or Password" });
			});
	};

	return (
		<BuyerContext.Provider
			value={{
				buyers,
				setBuyers,
				buyer,
				setBuyer,
				BuyerRegister,
				mailError,
				setMailError,
				nicError,
				setNicError,
				BuyerLogin,
			}}
		>
			{children}
		</BuyerContext.Provider>
	);
}

export default BuyerContext;
