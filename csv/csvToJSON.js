const fs = require('fs');
const csv = require('csv');
const bcrypt = require('bcrypt');

fs.readFile('./account.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allAccounts = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const account = {
        first_name: row[0],
        last_name: row[1],
        email: row[2],
        password: bcrypt.hashSync(row[3], 10),
        image: row[4],
        facebook_url: row[5],
        instagram_url: row[6],
        twitter_url: row[7]
      }
      allAccounts.push(account)
    }
    fs.writeFile('../data-sets/account.json', JSON.stringify(allAccounts), error => {
      console.log("account.json created");
    });
  });
});
