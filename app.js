console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

console.log(_.isString(12));
console.log((_.isString('Lobsang')));


var filteredArray = _.uniq(['Lobsang', 1, 2,3,1, 'Lobsang']);
console.log(filteredArray);




// var res = notes.addNote();
// console.log(res);

// var sum = notes.sum(3,4);
// console.log('Result:', sum);



// var user = os.userInfo();
// console.log(user);


// fs.appendFile('greetings.txt', `Hello ${user.username} You are ${notes.age}`);
