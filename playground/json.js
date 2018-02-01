var obj = {
    name: 'Lobsang'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

var personString = '{"name" : "Lobsang", "age" : 25}';
console.log(personString.name); // get undefined as personStyring is not an object

var person = JSON.parse(personString);
console.log(typeof person);
console.log(person.name);



