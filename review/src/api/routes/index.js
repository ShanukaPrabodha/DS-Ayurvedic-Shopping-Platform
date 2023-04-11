import { Router } from "express";
// import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Review API");
	next();
});

// Review Endpoints
// TODO: Create a new review
// TODO: Get all reviews
// TODO: Get a review
// TODO: Update a review
// TODO: Delete a review

export default router;
