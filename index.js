const fs = require('fs');

const users = require('./generates/users');
const sales = require('./generates/sales')(users);
const cashback = require('./generates/cashback')(users, sales);

const data = {
  users,
  sales,
  cashback
}

const json = JSON.stringify(data, null, 2);

fs.writeFile('db.json', json, 'utf8', () => {
  console.log('file created 🤖')
});
