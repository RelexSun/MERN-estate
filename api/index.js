// we are not using "type": "modules" so instead of importing we use require.
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouters = require("./routes/userRoutes.js");

// express app
const app = express();

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

app.use("/api/user", userRouters);
