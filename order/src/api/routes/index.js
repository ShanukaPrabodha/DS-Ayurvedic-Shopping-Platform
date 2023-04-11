import { Router } from "express";
// import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Order API");
	next();
});

// Order Endpoints
// TODO: Create a new order
// TODO: Get all orders
// TODO: Get a order
// TODO: Update a order
// TODO: Delete a order

export default router;
