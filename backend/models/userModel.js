import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    // Now, in this object is where we want to define all the fields that we want for a user.

    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,

    // and we can say timestamps and we can set that to true and it will create those fields automatically.
  }
);

const User = mongoose.model("User", userSchema);
// Mongoose.model because we want to create a model from this schema.

// We're going to call it user and we want to pass in our user schema and then we just want to export default
export default User;
