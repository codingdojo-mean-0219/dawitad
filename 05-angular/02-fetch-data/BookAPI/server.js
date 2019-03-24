const config = require('./server/config/routes.js')(app)

const mongoose = require('mongoose');
const flash = require('express-flash');
mongoose.Promise = global.Promise;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.use(flash());

app.use(session({
    secret: 'benderrod',
    resave : false,
    saveUninitialized : true,
    cookie : { maxAge : 60000 }
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})