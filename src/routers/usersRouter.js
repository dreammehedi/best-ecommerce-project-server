const express = require("express");
const { getUsers, regiserUser } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.get("/users", getUsers);
userRouter.post("/users", regiserUser);

module.exports = userRouter;
