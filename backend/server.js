import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import colors from "colors";
import connectDB from "./config/db.js";
const app = express();

dotenv.config();

connectDB();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  //req.params.id === /:id
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server runnning in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
  //server is running in development mode on port and them whatever port
);