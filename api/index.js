// we are not using "type": "modules" so instead of importing we use require.
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes.js");
const authRouter = require("./routes/authRoutes.js");

// express app
const app = express();

// allows json as the input of the server
app.use(express.json());

// const dotenv = require("dotenv");
// dotenv.config(); this is also acceptable

// connect to the database
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

// listen for requests
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
