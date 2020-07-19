const faker = require('faker');
const generateRandomNumber = require('../utils').generateRandomNumber;

const generateRandomNumberWithElevenDigits = () => generateRandomNumber(10000000000, 89999999999);

const users = [
  {
    id: 1,
    name: faker.name.findName(),
    email: faker.internet.email(),
    taxpayer_identification: generateRandomNumberWithElevenDigits(),
    password: 123456
  },
  {
    id: 2,
    name: faker.name.findName(),
    email: faker.internet.email(),
    taxpayer_identification: generateRandomNumberWithElevenDigits(),
    password: 123456
  },
  {
    id: 3,
    name: faker.name.findName(),
    email: faker.internet.email(),
    taxpayer_identification: generateRandomNumberWithElevenDigits(),
    password: 123456
  },
  {
    id: 4,
    name: 'Test User',
    email: 'test@test.com',
    taxpayer_identification: generateRandomNumberWithElevenDigits(),
    password: 123456
  }
];

module.exports = users;