import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAPI from "./api/AdminAPI";
import { useMutation } from "@tanstack/react-query";
import makeToast from "../components/toast";

const AdminContext = createContext();

export function AdminProvider({ children }) {
	const navigate = useNavigate();

	const [admin, setAdmin] = useState({
		email: "",
		password: "",
	});

	// Create a admin
	const { mutate: createAdmin, isLoading: createAdminLoading } = useMutation(() => AdminAPI.register(admin), {});

	// Login a admin
	const { mutate: loginAdmin, isLoading: loginAdminLoading } = useMutation(() => AdminAPI.login(admin), {
		onSuccess: (res) => {
			localStorage.setItem("stripeUserId", res.data.stripeUserId);
			localStorage.setItem("email", res.data.email);
			localStorage.setItem("authToken", res.data.token);
			localStorage.setItem("permissionLevel", res.data.permissionLevel);
			navigate("/admin");
			window.location.reload();
			makeToast({ type: "success", message: "Login Successful" });
		},
		onError: (err) => {
			makeToast({ type: "error", message: "Login Failed" });
		},
	});

	// Logout a admin
	const logout = () => {
		localStorage.removeItem("stripeUserId");
		localStorage.removeItem("email");
		localStorage.removeItem("authToken");
		localStorage.removeItem("permissionLevel");
		navigate("/admin/login");
		window.location.reload();
		makeToast({ type: "success", message: "Logout Successful" });
	};

	return (
		<AdminContext.Provider
			value={{
				admin,
				setAdmin,
				createAdmin,
				createAdminLoading,
				loginAdmin,
				loginAdminLoading,
				logout,
			}}
		>
			{children}
		</AdminContext.Provider>
	);
}

export default AdminContext;
