console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);

var sum = notes.sum(3,4);
console.log('Result:', sum);



var user = os.userInfo();
// console.log(user);


// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`);
