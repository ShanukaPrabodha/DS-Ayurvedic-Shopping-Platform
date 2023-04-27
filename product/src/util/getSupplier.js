import configs from "../config";
import axios from "axios";

const getSupplier = async (id) => {
	const result = await axios.get(`${configs.payment_service}/api/payment/get-one-customer/${id}`);
	return result;
};

export default getSupplier;