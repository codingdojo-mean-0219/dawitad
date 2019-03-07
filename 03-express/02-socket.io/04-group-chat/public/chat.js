           var socket = io.connect('http://localhost:1337');
       
           window.onload=function(){
            //Query DOM
                    var name = document.getElementById('name');           
                        description = document.getElementById('description'),
                        result = document.getElementById('result'),
                        btn = document.getElementById('send');
           
            //Emit events
            btn.addEventListener('click',function(){
                socket.emit('chat',{
                    name: name.value,  
                    description:description.value             
                }); 
            });  
                
           // listen for the Event

            socket.on('chat',function(data){
                console.log(data);
                //  result.innerHTML = "<h1>" + data.name + "</h1> " ;
                 result.innerHTML += '<p><strong>' + data.name + ':</strong>' + data.description +'</p>';
             });
            }

