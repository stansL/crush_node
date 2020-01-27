const http = require('http');

http.createServer((req,res) => {
    res.write('Hello Node-niggas');
    res.end();
}).listen(5000, () => console.log('Server started on port 5000....'));
