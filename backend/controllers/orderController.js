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

// @desc Get order by ID
// @route GET/api/orders/:id
// @access Private
const getOrderById = asyncHandler(async (req, res) => {
  //fetch the orders
  const order = await Order.findById(req.params.id).populate(
    //     Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).

    // in this example we replace user with the user document in the user collection. also we only fetch name and email field from user document:

    // populate('user', 'name email')
    "user",
    "name email"
  );
  //   Now, in addition to the order information, I also want to get the user's name and email that's associated

  // with this order.

  if (order && order.user._id.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("Unauthorized Action");
  } else if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("No order found");
  }
});

export { addOrderItems, getOrderById };
