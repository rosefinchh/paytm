const zod = require("zod");

// signup schema
const signupSchema = zod.object({
  firstName: zod.string(),
  lastName: zod.string(),
  email: zod.string(),
  password: zod.string(),
});

// signin schema
const signinSchema = zod.object({
  email: zod.string(),
  password: zod.string(),
});

// signup middleware
function signupMiddleware(req, res, next) {
  const { firstName, lastName, email, password } = req.body;

  const parsedInputs = signupSchema.safeParse({
    firstName,
    lastName,
    email,
    password,
  });

  if (parsedInputs.success) {
    next();
  } else {
    return res.json({
      msg: "wrong signup inputs provided",
    });
  }
}

// signin middleware
function signinMiddleware(req, res, next) {
  const { email, password } = req.body;

  const parsedInputs = signinSchema.safeParse({
    email,
    password,
  });

  if (parsedInputs.success) {
    next();
  } else {
    return res.json({
      msg: "wrong signin inputs provided",
    });
  }
}

module.exports = {
  signupMiddleware: signupMiddleware,
  signinMiddleware: signinMiddleware,
};
