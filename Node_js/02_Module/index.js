//This function allows us to use from ./index.js from greet.js

const greet = require("./greet");
const { person1, person2, person3 } = require("./people");
greet("alex");
console.log(person1);
console.log(person2);
console.log(person3);

greet(person1);
greet(person2);
greet(person3);
