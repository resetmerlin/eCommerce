import express from "express";
const router = express.Router();
import { addOrderItems } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(protect, addOrderItems);
//we want to pass in the protect middleware and set this to add order items.

// so if you make a post request to / API/orders, then we should be able to call addOrderItems function.

export default router;
