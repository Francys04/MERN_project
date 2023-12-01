//path module
import path from "path";

// console.log(path.basename("c:\\node\\app.html"));

// console.log(path.basename("c:\\node\\app.js", ".js"));

// console.log(path.dirname("c:\\nodejs\\courses\\app.js"));
//extensions of the file
// console.log(path.extname("c:\\node\\courses\\app.js"));

//join method for directories
// console.log(path.join("c:", "huxn-webdev", "courses", "redux-toolkit"));

// .. go up a level
// console.log(path.join("c:", "huxn-webdev", "courses", "redux-toolkit", ".."));
// console.log(
//   path.join("c:", "huxn-webdev", "courses", "redux-toolkit", "..", "..")
// );

// console.log(path.normalize("c:\\course\\redux\\store\\store\\feature"));

console.log(path.parse("c:\\course\\redux\\store\\store\\feature").base);
console.log(path.parse("c:\\course\\redux\\store\\store\\feature").name);
console.log(path.parse("c:\\course\\redux\\store\\store\\feature.js").ext);
