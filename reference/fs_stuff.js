const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname,'test'), {}, (err) => {
//     if(err) throw err;
//     console.log("Folder created!!");

// });

// Create a file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World of Node', (err) => {
    if (err) throw err;
    console.log("File written to....");
    // update a file
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' . I love Node.js', (err) => {
        if (err) throw err;
        console.log("File updated...");

    });
});

// REad File
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log("Doing the reading....!");
    console.log(data);
});


fs.rename(path.join(__dirname, 'test', 'hello.txt'),
    path.join(__dirname, 'test', 'worldie.txt'), (err, data) => {
        if (err) throw err;
        console.log("Doing the reading....!");
        console.log(data);
    });


