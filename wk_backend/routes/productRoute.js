import { getProducts, getProductById } from "../controllers/productController.js";
import express from "express";  
const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);

export default router;