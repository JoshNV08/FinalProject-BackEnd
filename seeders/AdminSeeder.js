const { faker } = require("@faker-js/faker")
const { Admin } = require("../models")
const bcrypt = require("bcryptjs")

async function adminSeeder() {
const admin = [];
const hashedPassword = await bcrypt.hash("123" , 11);
for (let i = 0; i < 20; i++) {
  const firstname = faker.person.firstName();
  const lastname = faker.person.lastName();
  const newAdmin = {
    firstname,
    lastname,
    email: faker.internet.email({ firstName: firstname, lastName: lastname
    }),
    password: hashedPassword ,
  };
  admin.push(newAdmin);
}
await Admin.bulkCreate(admin);
console.log("the seeders of admin are running")
}

module.exports = adminSeeder;