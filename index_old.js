const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // // if (req.url === '/') {
    // //     loadStuff('index.html',res);
    // // }else if(req.url === '/about.html'){
    // //     loadStuff('about.html',res);
    // // }

    // if (req.url == '/api/users') {
    //     const users = [
    //         { name: 'Bob', age: 40 },
    //         { name: 'Stanslaus', age: 32 },
    //         { name: 'William', age: 31 },
    //         { name: 'Jane', age: 28 }
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }


    // Build file paths dynamically
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extName = path.extname(filePath);
    let contentType = 'text/html';

    switch (extName) {
        case '.js': {
            contentType = 'text/javascript';
            break;
        }
        case '.css': {
            contentType = 'text/css';
            break;
        }
        case '.json': {
            contentType = 'application/json';
            break;
        }
        case '.png': {
            contentType = 'image/png';
            break;
        }
        case '.jpg': {
            contentType = 'image/jpg';
            break;
        }
    }
    fs.readFile(filePath, (err, content) => {
        res.writeHead(200, { 'Content-Type': contentType });
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), 'utf8', (err, content) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(content);
                });
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });

});

// const loadStuff = (fileName,res) => {
//     fs.readFile(path.join(__dirname, 'public', fileName), 'utf8', (err, data) => {
//         if(err) throw err;
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(data);
//     })
// }


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));