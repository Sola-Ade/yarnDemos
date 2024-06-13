const { faker } = require("@faker-js/faker");

console.log(
  faker.helpers.fake(
    "Hello {{person.prefix}} {{person.lastName}}, how are you today?",
  ),
);
