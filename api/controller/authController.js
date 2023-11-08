const User = require("../model/userModel.js");
const bcryptjs = require("bcryptjs");
const { errorHandler } = require("../utils/error.js");

const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
    });
  } catch (err) {
    // next(errorHandler(501, "error from the function"));
    next(err);
  }
};

module.exports = { signup };
