const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');

const logger = require('./middleware/logger');
const membersRouter = require('./routes/api/members');

var createError = require('http-errors');
var cookieParser = require('cookie-parser');

// app.get('/', (req, res) => {
//     // res.send('<h1>Hello to Express! - Node back end made easy!</h1>');
//     res.sendFile(path.join(__dirname,'public','index.html'))

// });

// Handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Home Page Route
app.get('/', function (req, res) {
    res.render('index', {
        title: 'Members App Revised',
        members
    });
});

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(logger);
app.use('/api/members', membersRouter);




app.listen(PORT, () => console.log(`Server started on ${PORT}`));


module.exports = app;