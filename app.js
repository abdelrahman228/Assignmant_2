//Assignment 2
//Part 1
//Q1
// const path = require('node:path');

// function logFilePathAndDir() {
//   console.log(`File: ${__filename}`);
//   console.log(`Dir: ${__dirname}`);
// }

// logFilePathAndDir();
//********************* */
//Q2
// const path = require('node:path');

// function getFileName(filePath) {
//   return path.basename(filePath);
// }

// console.log(getFileName("/user/files/report.pdf")); 
//************************ */
//Q3
// const path = require('node:path');

// function buildPath(obj) {
//   return path.join(obj.dir, obj.name + obj.ext);
// }
// const fileObj = { dir: "/folder", name: "app", ext: ".js" };

// console.log(buildPath(fileObj)); 
//******************************** */
//Q4
// const path = require('node:path');

// function getFileExtension(filePath) {
//   return path.extname(filePath);
// }
// console.log(getFileExtension("/docs/readme.md")); 
/********************************** */
//Q5
// const path = require('node:path');

// function parseFilePath(filePath) {
//   const parsed = path.parse(filePath);
//   return {
//     Name: parsed.name,
//     Ext: parsed.ext
//   };
// }

// console.log(parseFilePath("/home/app/main.js"));
/***************************************** */
//Q6
// const path = require('node:path');

// function isAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }

// console.log(isAbsolutePath("/home/user/file.txt"));
// console.log(isAbsolutePath("docs/readme.md"));
/********************************************** */
//Q7
// const path = require('node:path');

// function joinSegments(...segments) {
//   return path.join(...segments);
// }

// console.log(joinSegments("src", "components", "App.js"));
/*********************************************** */
//Q8
// const path = require('node:path');

// function resolvePath(relativePath) {
//   return path.resolve(relativePath);
// }

// console.log(resolvePath("./index.js"));
/********************************** */
//Q9
// const path = require('node:path');

// function joinTwoPaths(path1, path2) {
//   return path.join(path1, path2);
// }
// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));
/************************************************** */
// //Q10
// const fs = require('node:fs');
// const path = require('node:path');

// function deleteFileAsync(filePath) {
//   fs.unlink(filePath, (err) => {
//     if (err) {
//       console.error(`Error deleting ${path.basename(filePath)}:`, err);
//     } else {
//       console.log(`The ${path.basename(filePath)} is deleted.`);
//     }
//   });
// }
// deleteFileAsync("/path/to/file.txt");
/************************************** */
//Q11
// const fs = require('node:fs');
// const path = require('node:path');

// function createFolderSync(folderPath) {
//   try {
//     fs.mkdirSync(folderPath, { recursive: true });
//     console.log("Success");
//   } catch (err) {
//     console.error("Error creating folder:", err);
//   }
// }
// createFolderSync(path.join(__dirname, "newFolder"));
/**************************************************************** */
//Q12
// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on("start", () => {
//     console.log("Welcome event triggered!");
// });
// emitter.emit("start");
/************************ */
//Q13
// const EventEmitter = require('node:events');
// const emitter = new EventEmitter();

// emitter.on("login", (username) => {
//   console.log(`User loggin: ${username}`);
// });
// emitter.emit("login", "Ahmed");
/******************************* */
//Q14
// const fs = require('node:fs');

// function readFileSyncAndLog(filePath) {
//   try {
//     const data = fs.readFileSync(filePath, "utf8");
//     console.log(`the file content => "${data}"`);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
// }
// readFileSyncAndLog("./notes.txt");
//******************************************** */
//Q15
// const fs = require('node:fs');

// function writeFileAsync(filePath, content) {
//     fs.writeFile(filePath, content, "utf8", (err) => {
//         if (err) {
//             console.error(err);
//         }
//         console.log(`The file has been saved with content: "${content}"`);
//     });
// }
// writeFileAsync("./async.txt", "Async save");
/********************************** */
//Q16
// const fs = require('node:fs');

// function checkDirectoryExists(dirPath) {
//   try {
//     const stats = fs.statSync(dirPath);
//     return stats.isDirectory();
//   } catch (err) {
//     return false;
//   }
// }

// console.log(checkDirectoryExists("./notes.txt"));
/********************************** */
//Q17
// const os = require('node:os');

// function getSystemInfo() {
//   return {
//     Platform: os.platform(),
//     Arch: os.arch()
//   };
// }
// console.log(getSystemInfo());
/********************************** */
