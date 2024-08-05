const User = require("../models/userModels");

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
      res.status(201).send({ success: true, message: "New user created." });
    } else {
      res.status(404).send({ success: false, message: "Server Error!" });
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { getUsers, regiserUser };
