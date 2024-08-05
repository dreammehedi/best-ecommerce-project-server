const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is Required!"],
      trim: true,
      minLength: [3, "Minimum 3 Charecter!"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is Required!"],
      trim: true,
      minLength: [3, "Minimum 3 Charecter!"],
    },
    email: {
      type: String,
      required: [true, "Email is Required!"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: (value) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
        message: "Please enter a valid email address!",
      },
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
      minLength: [6, "Minimum 6 Charecter!"],
      set: (value) => bcrypt.hashSync(value, bcrypt.genSaltSync(10)),
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone Number is Required!"],
    },
    address: { type: String, required: [true, "Address is Required!"] },
    city: { type: String, required: [true, "City is Required!"] },
    postCode: { type: String },
    country: { type: String, required: [true, "Country is Required!"] },
    regionState: {
      type: String,
      required: [true, "Region / State is Required!"],
    },
    isAdmin: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
