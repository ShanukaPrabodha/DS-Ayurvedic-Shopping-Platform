import { Router } from "express";
// import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Product API");
	next();
});

// Product Endpoints
// TODO: Create a new product
// TODO: Get all products
// TODO: Get a product
// TODO: Update a product
// TODO: Delete a product

export default router;
