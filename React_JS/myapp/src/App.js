// 2. Create class componenet for code page

// import { Component } from "react";
// class App extends Component {
//   // to show content to the screen
//   render() {
//     return <h1>Hello Andrey</h1>;
//   }
// }

// 1. Create function component for JSX, for code page, more useful for coding
// import React from "react";

// function App() {
//   // React.createElement
//   return React.createElement(
//     "section",
//     null,
//     React.createElement("h1", "null", "Hello my name is Alex"),
//     React.createElement("p", "null", "this is paragraph"),
//     React.createElement("input", {
//       type: "text",
//       placeholder: "Enter your name",
//     }),
//     React.createElement("button", { type: "name" }, "Submit")
//With html
// <section>
//   <h1>Hello Alexander</h1>
//   <p>This is my content</p>
// </section>
//   );
// }

// Rules
// 1. one parent element must contain the following elements
// function App() {
//   //error message
//   // return <section></section><srticle></srticle>
//   // must to do
//   return (
//     <div>
//       <section>Section tag</section>
//       <article>Article tag</article>
//     </div>
//   );
// }

// 2. close all of the tags in react js
// function App() {
//   return (
//     <section>
//       <img />
//     </section>
//   );
// }

// 3. class Rule, not class but className
// function App() {
//   return <h1 className="title-class">Title</h1>;
// }

// function App() {
//   return (
//     <form>
//       <label for="name">Name</label>
//       <input type="text" id="name"></input>
//     </form>
//   );
// }

// Create more componenets for project, create componeent folder in directory

// export default App;

// for app.jsx

// use componenets folder for child components from another files

// For fragmenetation use <>Code</>
// import Add from "./components/Add";
// import Greetings from "./components/Greetings";
// import { Fragment } from "react";
// function App() {
//   return (
//     // <section>
//     <>
//       <Greetings />
//       <Add />
//       {/* <Fragment /> */}
//     </>
//     // </section>
//   );
// }

// export default App;

// Expressions in JSX
// function App() {
//   const myName = "Alex WebDec";
//   const multiply = (a, b) => a * b;
//   const specialClass = "simple-Class";

//   return (
//     <>
//       <h1>{myName}</h1>
//       <p>{2 + 2}</p>
//       <p>My Friends List {["alex", "john"]}</p>
//       <p>4 * 4 = {multiply(4, 4)}</p>
//       <p className={specialClass}>This is special Class</p>
//     </>
//   );
// }
// export default App;

// Lists

// function App() {
//   // Example 1
//   const numbers = [1, 2, 3, 4, 5];

//   return (
//     <>
//       {numbers.map((numbers) => (
//         <ul key={Math.random() * 10}>
//           <li>{numbers}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

//Example 2
//   const userinfo = [
//     { username: "Alexander", email: "alexander@gmail.com", location: "UK" },
//     { username: "Vali", email: "valir@gmail.com", location: "UK" },
//     { username: "Alex", email: "alex@gmail.com", location: "UK" },
//   ];

//   return (
//     //Rendering data from list, with key method
//     <>
//       {userinfo.map((user) => (
//         <ul key={Math.random() * 10}>
//           <li>{user.username}</li>
//           <li>{user.email}</li>
//           <li>{user.location}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default App;

// Props/ Properties

import User from "./User";
// Create new user file and putt code for User
function App() {
  return (
    <>
      <User
        img="https://avatars.githubusercontent.com/u/133686327?v=4"
        age={18}
        hobbies={["Coding", "Sleeping"]}
      />
    </>
  );
}

export default App;
