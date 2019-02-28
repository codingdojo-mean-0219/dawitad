// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response`
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === '/cats' ) {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === '/cars/new') {
        fs.readFile('views/newcars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/stylesheets/mystyle.css") {
        fs.readFile('stylesheets/mystyle.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents); 
            response.end();
        });
   }
  
    else if(request.url === '/images/Bugati2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/Bugati2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/GenevaMotors2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/GenevaMotors2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/lamborgini2.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/lamborgini2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/Rangerovers.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/Rangerovers.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat22.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/cat22.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat62.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/cat62.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat42.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/cat42.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
      else if(request.url === '/images/cat12.jpg'){
        // notice we won't include the utf8 encoding
        fs.readFile('images/cat12.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
      }
   // request didn't match anything:
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});  
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");