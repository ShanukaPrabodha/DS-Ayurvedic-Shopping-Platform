import { Router } from "express";
import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Payment API");
	next();
});

// Stripe API Call
router.post("/create-customer", controller.createNewCustomer);
router.post("/add-card", controller.addNewCard);
router.post("/make-payment", controller.createPaymentIntent);
router.get("/get-payment-methods/:customer_Id", controller.getPaymentMethods);
// get payment details by payment id
router.get("/get-payment-details/:payment_Id", controller.getPaymentDetails);
// ---------------------------------------------------------------------
router.get("/get-customers", controller.getAllCustomers);

export default router;
