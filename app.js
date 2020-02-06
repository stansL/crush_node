const http = require('http');
const fs = require('fs');
const path = require('path');

// // Create read and write streams
// // const myReadStream = fs.createReadStream(path.join(__dirname, './readme.txt'));
// const myReadStream = fs.createReadStream(path.join(__dirname, './public/index.html'));
// const myWriteStream = fs.createWriteStream(path.join(__dirname,'./writeme.txt'))
const PORT = process.env.PORT || 5002;
// const server = http.createServer((req, res) => {
//     console.log(`Requestt was made to : ${req.url}`);
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     myReadStream.pipe(res);
// });
const server = http.createServer((req, res) => {
    console.log(`Request was received at : ${req.url}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let obj = {
        name: "Test Object",
        job: "Developer",
        age: 29
    }

    res.end(JSON.stringify(obj));
    // myReadStream.pipe(res);
});

server.listen(PORT, () => `Server started on port ${PORT}`);


// // myReadStream.on('data', (chunk) => {
// //     console.log("=============================================");
// //     console.log('REceived Data to be writtend  of size: ');


// //     // console.log(`New chunk: ${chunk}`);// parses the bytes
// //     // console.log(chunk); //writes the actual bytes
// //     mySwriteStream.write(chunk);
// // });

// // alternate using pipes
// // myReadStream.pipe(myWriteStream);

