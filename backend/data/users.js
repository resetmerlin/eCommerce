import bcrypt from "bcryptjs";

const users = [
  //     And the these users have to have only the fields that we have in our user model or mongoose isn't going

  // to let us inserted into the database.
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "Jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
