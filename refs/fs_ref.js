const fs = require('fs');
const path = require('path');

// File System

// fs.mkdir(path.join(__dirname, 'notes'), err => {
//   if (err) throw err;
//   console.log('Directory has been created');
// });

// fs.writeFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw err;
//     console.log('File has been created');


//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' From append file',
//       (err) => {
//         if (err) throw err;
//         console.log('File has been changed');

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err;
//             console.log(data);
//           });
//       }
//     )
//   }
// )

// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   (err, data) => {
//     if (err) throw err;
//     console.log(Buffer.from(data).toString());
//   });

// fs.rename(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   err => {
//     if (err) throw err;
//     console.log('File has been renamed');
//   }
// );

fs.rm('mynotes.txt', (err) => {
  if (err) throw err;
  console.log('File has been removed');
});
