//our database config file, our connection file, whatever you want
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      //Now with the current version of Mongoose, there's a few options that we have to add or else we're going

      // to get warnings in in the console.
      //these 2 are
      useNewUrlParser: true,
    });

    // So in the try, let's create a variable called Conn for connection and we want to await because Mongoose

    // .connect() returns a promise.

    // And what this takes in is our mango URI.

    // And then we have a second argument we can pass in, which is a set of options.
    console.log(`mongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
    //So we'll do process, dot, exit.

    // And if we pass one in here, it means it's going to exit with failure.
  }
};

export default connectDB;
