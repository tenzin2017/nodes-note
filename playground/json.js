// var obj = {
//     name: 'Lobsang'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name" : "Lobsang", "age" : 25}';
// console.log(personString.name); // get undefined as personStyring is not an object

// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person.name);


const fs = require('fs');

var originalNote = {
    title:'some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);



