var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
// use app's get method and pass it the base route '/' and a callback
app.get('/', function(request, response) {
    // just for fun, take a look at the request and response objects
   console.log("The request object", request);
   console.log("The response object", response);
   // use the response object's .send() method to respond with an h1
   response.send(index.html);
})
app.get('/cars', function(request, response) {
  // just for fun, take a look at the request and response objects
 console.log("The request object", request);
 console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('cars');
})
app.get('/cats', function(request, response) {
  // just for fun, take a look at the request and response objects
 console.log("The request object", request);
 console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('cats');
})
app.get('/cars/new', function(request, response) {
  // just for fun, take a look at the request and response objects
 console.log("The request object", request);
 console.log("The response object", response);
 // use the response object's .send() method to respond with an h1
 response.render('newcar');
})

app.get('/cat1',function(request,response){
  var cat_arr =[
    { name : 'fluffy', food: 'Enjera',  age: '4', sleep1:' by the fire place', sleep2 : 'on the cauch', img: '<img src="images/cat12.jpg" alt="Cinque Terre" width="600" height="400">'
  }]
  response.render('details', {cats: cat_arr});
})
app.get('/cat2',function(request,response){
  var cat_arr =[
    { name : 'browne', food: 'spageti',  age: '8', sleep1:' on the counter', sleep2 : 'on the cauch', img: '<img src="images/cat12.jpg" alt="Cinque Terre" width="600" height="400">'
  }]
  response.render('details', {cats: cat_arr});
})
app.get('/cat3',function(request,response){
  var cat_arr =[
    { name : 'sparow', food: 'pasta',  age: '10', sleep1:' in the bed', sleep2 : 'on the cauch', img: '<img src="images/cat12.jpg" alt="Cinque Terre" width="600" height="400">'
  }]
  response.render('details', {cats: cat_arr});
})
app.get('/cat4',function(request,response){
  var cat_arr =[
    { name : 'rax', food: 'salmon',  age: '12', sleep1:' by the microwave', sleep2 : 'on the cauch', img: '<img src="images/cat12.jpg" alt="Cinque Terre" width="600" height="400">'
  }]
  response.render('details', {cats: cat_arr});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})