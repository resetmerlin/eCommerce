import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc Create new order
// @route POST/api/orders
// @access Private
const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("No order items");
    //we are checking that if there is no items on orderItems...
    //if it is empty, we will gonna throw error
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      //this is gonna be protected route.. So we'll be albe to get a token and get
      //the user ID from the token
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
    //the reason we do res.status 201 is something was created and add some Jason to that
  }
});

export { addOrderItems };
