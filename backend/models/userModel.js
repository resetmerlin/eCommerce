import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
  //   Now, one thing that's really important that we want to add here is we only want to do this if the password

  // field is sent or if it's modified.

  // When we have the update profile functionality and we change, we update, let's say, our name or our

  // email, but not the password.
  if (!this.isModified("password")) {
    next();
    //And if it has been modified, then this will run the below line and it will hatch the password.
  }
  const salt = await bcrypt.genSalt(10);
  //So there's a method on bcrypt called gen Salt,
  // which will generate a salt and it takes in a number rounds, and will use 10
  this.password = await bcrypt.hash(this.password, salt);
  //   so initially this.password is the plain text password, but now we're resetting it to be the Hash

  // password.
});
const User = mongoose.model("User", userSchema);
// Mongoose.model because we want to create a model from this schema.

// We're going to call it user and we want to pass in our user schema and then we just want to export default
export default User;
