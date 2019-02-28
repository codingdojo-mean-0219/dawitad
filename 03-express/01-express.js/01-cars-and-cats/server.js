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


app.listen(8000, function() {
  console.log("listening on port 8000");
})