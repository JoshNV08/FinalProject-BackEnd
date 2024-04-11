const { faker } = require("@faker-js/faker")
const { User } = require("../models")


async function userSeeder() {
const users = [];
for (let i = 0; i < 20; i++) {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const newUser = {
    firstname,
    lastname,
    address,
    email: faker.internet.email({ firstName: firstname, lastName: lastname
    }), phoneNumber: faker.phone.number(),
    password: "123",
  };
  users.push(newUser);
}
await User.bulkCreate(users);
console.log("the seeders of users are running")
}

module.exports = userSeeder;