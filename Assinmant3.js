//Assignment 3
//Part 1
//Q1
// const fs = require('node:fs');

// function readFileInChunks(filePath) {
//   const stream = fs.createReadStream(filePath, { encoding: "utf8" });

//   stream.on("data", (chunk) => {
//     console.log("New chunk received:");
//     console.log(chunk);
//   });

//   stream.on("end", () => {
//     console.log("Finished reading file.");
//   });

//   stream.on("error", (err) => {
//     console.error("Error reading file:", err);
//   });
// }

// readFileInChunks("./big.txt");
//********************* */
// const fs = require('node:fs');

// function copyFileUsingStreams(source, destination) {
//   const readable = fs.createReadStream(source, { encoding: "utf8" });
//   const writable = fs.createWriteStream(destination);

//   readable.pipe(writable);

//   writable.on("finish", () => {
//     console.log("File copied using streams");
//   });

//   readable.on("error", (err) => {
//     console.error("Error reading file:", err);
//   });

//   writable.on("error", (err) => {
//     console.error("Error writing file:", err);
//   });
// }

// copyFileUsingStreams("./source.txt", "./dest.txt");
/**************************************************** */
//Q3
// const fs = require('node:fs');
// const zlib = require('node:zlib');
// const { pipeline } = require('node:stream');

// function compressFile(source, destination) {
//   const readable = fs.createReadStream(source);
//   const gzip = zlib.createGzip();
//   const writable = fs.createWriteStream(destination);

//   pipeline(readable, gzip, writable, (err) => {
//     if (err) {
//       console.error("Pipeline failed:", err);
//     } else {
//       console.log("File compressed successfully using pipeline");
//     }
//   });
// }

// compressFile("./data.txt", "./data.txt.gz");
//************************ */
//Part 2
//Q1
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const usersFile = path.join(__dirname, "users.json");

// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// function writeUsers(users) {
//   fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
// }

// const server = http.createServer((req, res) => {
//   if (req.method === "POST" && req.url === "/user") {
//     let body = "";

//     req.on("data", chunk => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const newUser = JSON.parse(body);

//       const users = readUsers();

//       const emailExists = users.some(u => u.email === newUser.email);

//       if (emailExists) {
//         res.writeHead(400, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ message: "Email already exists." }));
//       }

//       users.push(newUser);
//       writeUsers(users);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User added successfully." }));
//     });
//   } else {
//     res.writeHead(404, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Not Found" }));
//   }
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

//************************ */
//Q2
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const usersFile = path.join(__dirname, "users.json");

// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// function writeUsers(users) {
//   fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
// }

// const server = http.createServer((req, res) => {
//   if (req.method === "PATCH" && req.url.startsWith("/user/")) {
//     const id = req.url.split("/")[2];

//     let body = "";
//     req.on("data", chunk => {
//       body += chunk.toString();
//     });

//     req.on("end", () => {
//       const updates = JSON.parse(body);
//       const users = readUsers();

//       const userIndex = users.findIndex(u => u.id == id);

//       if (userIndex === -1) {
//         res.writeHead(404, { "Content-Type": "application/json" });
//         return res.end(JSON.stringify({ message: "User ID not found." }));
//       }

//       if (updates.name !== undefined) users[userIndex].name = updates.name;
//       if (updates.age !== undefined) users[userIndex].age = updates.age;
//       if (updates.email !== undefined) users[userIndex].email = updates.email;

//       writeUsers(users);

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ message: "User updated successfully." }));
//     });

//     return;
//   }
//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Not Found" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//************************ */
//Q3
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const usersFile = path.join(__dirname, "users.json");


// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }


// function writeUsers(users) {
//   fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
// }

// const server = http.createServer((req, res) => {
 
//   if (req.method === "DELETE" && req.url.startsWith("/user/")) {
//     const id = req.url.split("/")[2];
//     const users = readUsers();

//     const userIndex = users.findIndex(u => u.id == id);

//     if (userIndex === -1) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify({ message: "User ID not found." }));
//     }

//     users.splice(userIndex, 1);
//     writeUsers(users);

//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify({ message: "User deleted successfully." }));
//   }

//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Not Found" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//************************ */
//Q4
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const usersFile = path.join(__dirname, "users.json");

// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/user") {
//     const users = readUsers();

//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(users));
//   }

//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Not Found" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//************************ */
//Q5
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const usersFile = path.join(__dirname, "users.json");

// function readUsers() {
//   try {
//     const data = fs.readFileSync(usersFile, "utf8");
//     return JSON.parse(data);
//   } catch (err) {
//     return [];
//   }
// }

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url.startsWith("/user/")) {
//     const id = req.url.split("/")[2];

//     const users = readUsers();

//     const user = users.find(u => u.id == id);

//     if (!user) {
//       res.writeHead(404, { "Content-Type": "application/json" });
//       return res.end(JSON.stringify({ message: "User not found." }));
//     }

//     res.writeHead(200, { "Content-Type": "application/json" });
//     return res.end(JSON.stringify(user));
//   }

//   res.writeHead(404, { "Content-Type": "application/json" });
//   res.end(JSON.stringify({ message: "Not Found" }));
// });

// server.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
//************************ */
//part 3
//Q1
//node بتشتغل سنجل سيريد بس فس حلات بتشتغل مالتي سيريد والي بيعمل كده هي evnt loop لانها بتستقبل المهام وتزعها علي مراحل مختلفه
//************************ */
//Q2
//هو مسؤول عن تشغيل الايفنت لوب وادارت الثيريد وتوزيع المهمات المختلفه
//************************ */
//Q3
//1- stack : ينفذ السطر واحد تلو الاخر ,لو امتلا بعمليات ثقيله يعمل بلوكينك
//2-queue : هو طابور للعمليات بعد الانتهاء من الايفنت
//3-Event loop : هو الذي ينفذ العمليات الغير متزامنه ,ياخذ العمليه من stack ولما وقت الانتظار يخلص تذهب الي Queue
//************************ */
//Q4
//ينفذ العمليات التي لاتنفذها السنجل سريد ولما يخلص بترجع للافنت لوب
/**************************************** */
//Q5
//Blocking Code: يوقف كل ما خلفه حتا ينتهي
// Non‑Blocking: لا يوقف من بعده لاكن يوزع كل امر علي ثريد لاتمامها
/************************************ */