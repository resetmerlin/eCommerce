import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    //   So this is going to be the individual review rating, the rating down here is the going to be the average

    //   of all of the review ratings, OK?
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const productSchema = mongoose.Schema(
  {
    // Now, in this object is where we want to define all the fields that we want for a user.
    user: {
      // And then right here, right here, I want to put a user field because I want to know which user
      // It'll be an admin only admins can create products, but I want to know which user, which admin created
      // which product.
      type: mongoose.Schema.Types.ObjectId,
      //   So let's give this a type and the type we want to use as an object ID,
      required: true,
      ref: "User",
      //   we need to reference a specific model for this object ID.
      // so we use ref and then the model which is going to be user
    },
    name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    reviews: [reviewSchema],
    //     Reviews is going to be an array of review objects.

    // So we're actually going to have a separate schema called review schema.
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,

    // and we can say timestamps and we can set that to true and it will create those fields automatically.
  }
);

const Product = mongoose.model("Product", productSchema);
// Mongoose.model because we want to create a model from this schema.

// We're going to call it user and we want to pass in our user schema and then we just want to export default
export default Product;
