const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 8000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static( __dirname + './../client/Authors/dist/Authors'));

mongoose.connect('mongodb://localhost/Authors',{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
require("./model/Author_model")



require('./config/routers')(app)
app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./../client/Authors/dist/Authors/index.html"))
  
});

app.listen(8000, function() {
    console.log(`listening on port  + ${port}`);

    
})