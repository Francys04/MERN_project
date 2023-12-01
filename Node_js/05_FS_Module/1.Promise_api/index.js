import * as fs from "fs/promises";

// creating directory / folder

// try {
//   await fs.mkdir("c:\\node.js\\courses\\redux\\toolkit", { recursive: true });
//   console.log("folder created successfully");
// } catch (error) {
//   console.log(error);
// }

// Read file -> content of file
// try {
//   const files = await fs.readdir("c:\\node.js\\courses\\redux\\toolkit");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }

//remove content from file
// try {
//   await fs.rmdir("c:\\node.js\\toolkit");
// } catch (error) {
//   console.log(error);
// }

// create and write files in directory

// try {
//   await fs.writeFile("README.md", "hello ");
// } catch (error) {
//   console.log(error);
// }

// read file
// try {
//   const data = await fs.readFile("README.md", "utf-8");
//   console.log(data);
// } catch (error) {
//   console.log(error);
// }

//append data in existing file
// try {
//   await fs.appendFile("README.md", "alex is there1");
// } catch (error) {
//   console.log(error);
// }

//copy the file
// try {
//   await copyFile("README.md", "info.txt");
// } catch (error) {
//   console.log(error);
// }

//get file information
try {
  const info = await fs.stat("info.txt");
  console.log(info);
} catch (error) {
  console.log(error);
}
