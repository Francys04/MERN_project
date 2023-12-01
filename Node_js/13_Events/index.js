import EventEmitter from "events";

//create instance
const customEmitter = new EventEmitter();

// 11. on => listen/register for an event
// 2. once => lister/register for an event
// 3. emit: emit/call an event

// 1.
// customEmitter.on("response", (name, id) => {
//   console.log(`user: ${name} id: ${id}`);
// });

// 2.
customEmitter.once("response", (name, id) => {
  console.log(`user: ${name} id: ${id}`);
});

// 3.
customEmitter.emit("response", "john", 12);
customEmitter.emit("response", "alex", 22);
