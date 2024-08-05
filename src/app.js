const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const xssClean = require("xss-clean");
const apiLimit = require("express-rate-limit");
const createError = require("http-errors");
const userRouter = require("./routers/usersRouter");
const productsRouter = require("./routers/productsRouter");
const app = express();

const apiCallLimit = apiLimit({
  windowMs: 15 * 60 * 1000, // 10 minutes
  max: 50,
  message: "Too many requests from this IP, please try again later.",
});

// middleware
app.use(cors());
app.use(morgan("dev"));
app.use(xssClean());
app.use(apiCallLimit);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// my custom routers
app.use("/api", userRouter);
app.use("/api", productsRouter);

// home route
app.get("/", (req, res) => {
  res.send("Welcome my server.");
});

// client error handler
app.use((req, res, next) => {
  next(createError(404, "Route Not Found!"));
});

// server error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message,
  });
});

module.exports = app;
