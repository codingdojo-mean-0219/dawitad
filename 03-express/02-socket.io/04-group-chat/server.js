const express = require('express');
const app = express();
app.use(express.static(__dirname + "/public"));
const server = app.listen(1337);
const io = require('socket.io')(server);
var counter = 0;
    
io.on('connection', function (socket) { //2
  
    console.log('Welcome to my Connection!!',socket.id)
    socket.on('chat', function (data) { 
            io.sockets.emit('chat',data);
          });

//   socket.emit('greeting', { msg: 'Greetings, from server Node, brought to you by Sockets! -Server' }); //3
//   socket.on('thankyou', function (data) { //7
//     console.log(data.msg); //8 (note: this log will be on your server's terminal)
//   });
    
});