import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Product from "../models/productModel.js";

// add up here just a header for each wrote that says what it is and the access level
// description and this is going to fetch all products.

// @desc Fetch all products
// @route GET /api/products
// @access  Public

// what I mean by access is some routes, we'll need a token.

// For instance, when you you know, when you purchase a product, you need to be logged in.

// So you need to send a token to specific routes and those will be private routes.

// This is a public road, meaning anyone can hit it.

router.get(
  "/",
  asyncHandler(async (req, res) => {
    //that should be able to get the get all products.
    //we installed asyncHandler

    const products = await Product.find({});
    // Whenever we use a mongoose method, it returns a promise
    res.json(products);
  })
);

// @desc Fetch single product
// @route GET /api/products/:id
// @access  Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      //req.params.id === /:id
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
      //And that message will just say product, product not found.
      //   However, now that we have this custom error handler, we can simply set the status first.

      //   So just set it to whatever we want and then we can throw a new error and pass in a message.
      //And now if we go back, if you recall, what has to happen for this to fire off is it has to be an actual

      // formatted object ID, but just not one that's in the database.
    }
  })
);

export default router;
