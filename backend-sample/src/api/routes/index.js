import { Router } from "express";
import controller from "../controllers";
// import middleware from "../middleware";

const router = Router();

// Root API Call
router.get("/", (req, res, next) => {
	res.send("Ayurvedic Shopping Platform API");
	next();
});

// Sample endpoints
router.post("/sample/", controller.insertSample); // insert one sample
router.get("/sample/", controller.getAllSamples); // get all samples
router.get("/sample/:id", controller.getOneSample); // get one sample
router.put("/sample/:id", controller.updateSample); // update one sample
router.delete("/sample/:id", controller.deleteSample); // delete one sample
router.get("/sample/search/:search", controller.searchSamples); // search samples

export default router;
