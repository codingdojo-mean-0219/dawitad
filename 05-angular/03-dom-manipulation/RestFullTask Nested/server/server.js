const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const PORT = 8000;

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, './static')));
// app.use(express.static( __dirname + './../Client/RestfullCRUD/dist/RestfullCRUD'));
app.use(express.static(path.join(__dirname, '../Client/RestfullCRUD/dist/RestfullCRUD')));
// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myTask',{ useNewUrlParser: true });
require('./model/mymodel'); 

require("./config/routes")(app);

app.listen(PORT, function() {
    console.log(`listening on port  ${PORT}` );
})