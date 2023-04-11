import { Router } from "express";
// import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Auth API");
	next();
});

// Auth Endpoints
// TODO: Login
// TODO: Signup

export default router;
