import { Router } from "express";
import controller from "../controllers";
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

// Admin Endpoints
// TODO: Middlewares Not Added Yet
router.get("/admin/:id", controller.getAdminDetails);
router.post("/admin/login", controller.loginAdmin);
router.post("/admin/register", controller.registerAdmin);
router.put("/admin-edit/:id", controller.editAdminDetails);
router.delete("/admin-delete/:id", controller.deleteAdmin);

export default router;
