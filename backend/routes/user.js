const express = require("express");
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
  return res.json({
    msg: "this is the real signin route",
  });
});

module.exports = router;
