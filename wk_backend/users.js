import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Bob Williams",
    email: "bob@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Sarah Davis",
    email: "sarah@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;