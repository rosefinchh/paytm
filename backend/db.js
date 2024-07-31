const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createUser(firstName, lastName, email, password) {
  const newUser = await prisma.user.create({
    data: {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
    },
  });

  console.log("new user created");
}

async function checkUser(email) {}

module.exports = {
  createUser: createUser,
  checkUser: checkUser,
};
