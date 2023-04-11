import { Router } from "express";
import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Order API");
	next();
});

// Order Endpoints
router.post("/", controller.addOrder); // insert one order
// TODO: Get all orders

router.patch("/paid/:orderId", controller.changeOrderIsPaidStatus); // change order isPaid status
router.get("/:orderId", controller.getOrder); // get one order

// TODO: Update a order
// TODO: Delete a order

export default router;
