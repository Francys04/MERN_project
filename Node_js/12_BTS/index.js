// Blocking code

// console.log("start");

// alert("Block");
// console.log("end");

//Non blocking code
// console.log("start");
// setTimeout(() => {
//   alert("Non-Blocking");
// }, 1000);

// console.log("end");

// whiout callback

import fs from "fs";

console.log("start");

let data = fs.readFileSync("text.txt", "utf-8", (err, res) => {
  err ? console.log(err) : console.log(res);
});
console.log(data.toString());

console.log("end");
