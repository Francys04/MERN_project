import { URL } from "url";
const myURL = new URL("https://www.example.com:8080/p/a/t/h?query=string#hash");
console.log(myURL.host);
console.log(myURL.port);
console.log(myURL.path);
console.log(myURL.query);
console.log(myURL.hash);

console.log(myURL.protocol);

console.log(myURL.search);
console.log(myURL.searchParams);

//bot works the same

console.log(myURL.toJSON());
console.log(myURL.toString());
