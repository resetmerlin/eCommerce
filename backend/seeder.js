import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  //     Now, this is going to be asynchronous because we're dealing with the database or dealing with mongoose.

  // So everything returns a promise.
  try {
    await Order.deleteMany();
    //delete everything
    //     And the first thing I want to do is clear all three collections out completely so we can take the model.
    // We'll do order first and we can use any mongoose methods we want here.

    await Product.deleteMany();
    await User.deleteMany();

    //     Now we're going to import the users so we can say, oh, wait, take the user model and then insert

    // many and pass in users, which is the data that we're getting from up here: import users.

    const createdUsers = await User.insertMany(users);
    // this will be the array of the created user

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
      //let's set this to the products that we brought in, and i'm gonna map through this and add admin user to each one
      //so let's say for each product I want to return an object with all of the stuff that's in the product already
    });

    await Product.insertMany(sampleProducts);
    // The insertMany() takes an array of documents to insert into the specified collection.
    console.log("Date Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
// Now we have a connection between products and users, and I want the admin user to be the the object

// ID for the for all the product products where I only have one admin.

// So we want that admin to be connected.

const destroyData = async () => {
  try {
    await Order.deleteMany();

    await Product.deleteMany();
    await User.deleteMany();

    console.log("Date Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
