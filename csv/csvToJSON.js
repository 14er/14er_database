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

fs.readFile('./ranges.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allRanges = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const range = {
        name: row[0]
      }
      allRanges.push(range)
    }
    fs.writeFile('../data-sets/ranges.json', JSON.stringify(allRanges), error => {
      console.log("ranges.json created");
    });
  });
});

fs.readFile('./peaks.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allPeaks = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const peak = {
        peak_name: row[1],
        elevation: row[2],
        image_url: row[4],
        difficulty: row[3],
        rank: row[0],
        range_id: row[5]
      }
      allPeaks.push(peak)
    }
    fs.writeFile('../data-sets/peaks.json', JSON.stringify(allPeaks), error => {
      console.log("peaks.json created");
    });
  });
});

fs.readFile('./account_peak.csv', (error, data) => {
  csv.parse(data, (error, data) => {
    let allAccountPeaks = [];
    for (var i = 1; i < data.length; i++) {
      const row = data[i];
      const account_peak = {
        account_rating: row[2],
        account_image_url: row[3],
        account_id: row[0],
        peak_id: row[1]
      }
      allAccountPeaks.push(account_peak)
    }
    fs.writeFile('../data-sets/account_peak.json', JSON.stringify(allAccountPeaks), error => {
      console.log("account_peak.json created");
    });
  });
});
