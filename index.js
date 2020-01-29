const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello to Express! - Node back end made easy!</h1>');
//     res.sendFile(path.join(__dirname,'public','index.html'))

// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on ${PORT}`));


module.exports = app;