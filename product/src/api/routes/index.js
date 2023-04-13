import { Router } from "express";
import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Product API");
	next();
});

router.post("/product/", controller.insertProduct); // insert one Product
router.get("/product/", controller.getAllProducts); // get all Products
router.get("/product/:id", controller.getOneProduct); // get one Campingl Product
router.put("/product/:id", controller.updateProduct); // update one Camping Product
router.delete("/product/:id", controller.deleteProduct); // delete one Camping Product
router.get("/product/search/:search", controller.searchProducts); // search Camping Product


export default router;
