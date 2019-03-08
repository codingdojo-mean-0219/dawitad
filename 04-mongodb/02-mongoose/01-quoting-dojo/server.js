// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose',{ useNewUrlParser: true });

app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');

var session = require('express-session');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

const flash = require('express-flash');
app.use(flash());


var QuoteSchema = new mongoose.Schema({
    name: String,
    quote: String
   },{timestamps: true})

mongoose.model('Quote', QuoteSchema); 
   var Quote = mongoose.model('Quote') 

app.get('/', function(req, res) {
  
    res.render('index');
})

app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body); 

  var quote = new Quote({name: req.body.name, quote: req.body.quote});
  quote.save(function(err) {
    // if there is an error console.log that something went wrong!
       
    if(err) {
        console.log("We have an error!", err);
        for(var key in err.errors){
            req.flash('registration', err.errors[key].message);
        }
        res.redirect('/',{errors: quote.errors})
    } else { 
        console.log('successfully added a user!');
        res.redirect('/result');
        } 
        
});
res.redirect('/result');
})

app.get('/result', function(req, res) {
    Quote.find({}).sort({createdAt: -1}).execFind(function(err, quotes) {
        if(err) {
            res.render('result', {errors: Quote.errors});
        }
        else {
           
            console.log(quotes);
            res.render('result', {quotes: quotes});
        }
    });
})

app.get('/quotes', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('result');
})

// app.get('/skip ', function(req, res) {
//     // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
//     res.redirect('/');
// })

app.listen(8000, function() {
    console.log("listening on port 8000");
   });
