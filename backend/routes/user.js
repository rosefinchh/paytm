const express = require("express");
require("dotenv").config();
const { signupMiddleware, signinMiddleware } = require("../middleware");
const { createUser } = require("../db");

const router = express.Router();

router.post("/signup", signupMiddleware, (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  createUser(firstName, lastName, email, password);
  return res.json({
    msg: "new user created",
  });
});

router.post("/signin", signinMiddleware, (req, res) => {
  const secret = process.env.JWT_SECRET;
  return res.json({
    msg: secret,
  });
});

module.exports = router;
