const express = require("express");
const {
  getUsers,
  regiserUser,
  loginUser,
} = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", regiserUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
