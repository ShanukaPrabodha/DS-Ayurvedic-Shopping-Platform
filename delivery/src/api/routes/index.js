import { Router } from "express";
// import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Delivery API");
	next();
});

// Delivery Endpoints
// TODO: Create a new delivery
// TODO: Get all deliveries
// TODO: Get a delivery
// TODO: Update a delivery
// TODO: Delete a delivery

export default router;
