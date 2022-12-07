import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
dotenv.config();

connectDB();

const app = express();

// app.use((req, res, next) => {
//   console.log("helloo");
//   next();
// });
// So app.use is where you want to pass your middleware in and this can be a function that takes in
// you always have to call 'next' to move to the next piece of middleware unless

// you're just, you know, stopping the whole request response cycle.

app.use(express.json());
// this will allow us to accept JSON data in the body.

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server runnning in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
  //server is running in development mode on port and them whatever port
);
