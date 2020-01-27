const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     loadStuff('index.html',res);
    // }else if(req.url === '/about.html'){
    //     loadStuff('about.html',res);
    // }

    
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