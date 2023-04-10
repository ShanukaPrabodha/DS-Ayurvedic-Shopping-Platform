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
// ---------------------------------------------------------------------
router.post("/get-payment-methods", controller.getPaymentMethods);
router.get("/get-customers", controller.getAllCustomers);

export default router;
