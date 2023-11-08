const User = require("../model/userModel.js");
const bcryptjs = require("bcryptjs");

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPass });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { signup };
