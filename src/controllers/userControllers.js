const bcrypt = require("bcrypt");
const User = require("../models/userModels");
const jwtToken = require("../helper/jwtToken.js");

// get all users
const getUsers = async (req, res, next) => {
  try {
    res.send([
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "Alice Doe" },
    ]);
  } catch (error) {
    next(error);
  }
};

// register a new user
const regiserUser = async (req, res, next) => {
  try {
    const userNewData = req.body;
    const { email } = userNewData;

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ message: "Email is already registered!" });
    }

    // Create new user
    const newUser = await User.create(userNewData);
    if (newUser?._id) {
      res
        .status(201)
        .send({ success: true, message: "You have successfully registered." });
    } else {
      res.status(404).send({ success: false, message: "Server Error!" });
    }
  } catch (error) {
    next(error);
  }
};

// login user
const loginUser = async (req, res, next) => {
  try {
    const userData = req.body;

    // const options = { password: 0 };
    const findUser = await User.findOne({ email: userData.email });

    // find database user
    if (!findUser) {
      return res.status(404).send({ message: "User not found!" });
    }

    // check user password is correct
    const isMatch = await bcrypt.compare(userData.password, findUser.password);

    if (!isMatch) {
      return res.status(404).send({ message: "Credentials are not match!" });
    }

    // generate user token
    const token = jwtToken(findUser);

    res
      .status(200)
      .send({ success: true, message: "Login Successfully.", token: token });
  } catch (error) {
    next(error);
  }
};
module.exports = { getUsers, regiserUser, loginUser };
