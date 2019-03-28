
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '../Restfullapi/dist/Restfullapi'));
app.use(express.static( __dirname + '/Restfullapi/dist/Restfullapi' ));
app.set('views', path.join(__dirname, './views'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/User_DB',{ useNewUrlParser: true });
// var connection = mongoose.connection;
// connection.on('connected', function(){console.log("connected to Db")})

var UserSchema = new mongoose.Schema({
    name: String,
    description: String,
   })
   mongoose.model('User', UserSchema); 
   var User = mongoose.model('User')

// routes

app.get('/users', function(req, res) {
 User.find({},function(err,users){
     if(err){
         console.log("Returned rror",err);
         res.json({message:"Error",error:err});
     }else{
         res.json({message:"Success",users:users})
         res.send('Please dont send me emails!')
        
     }
 })
//    res.render("index.html");
})

app.get('/users/:id', function(req, res) {
    console.log(req.params.id);
    User.find({_id:req.params.id},function(err,user){
        if(err){
            console.log("Returned rror",err);
            res.json({message:"Error",error:err});
        }else{
            res.json({message:"Success",user:user})
        }
    })
       
   })

app.post('/user', function(req, res) {
   console.log("REQUEST",req.body.name);
   const user = new User({name: req.body.name, description: req.body.description});
   user.save(function(err){
       if(err){
           console.log(("returned error"),err);
           res.json({message:"Error", error: err});
       }else{
           console.log('Successfully aded a task!');
           res.json({message:"Success", user:user})
       }
   }) 
   
})

app.put('/users/:id', function(req,res){
    let id = req.params.id;
    User.findById(id, function(err, user) {
      if (err) {
        console.log('something went wrong');
      } else {
        if (req.body.name) {
          User.name = req.body.name;
        }
        if (req.body.description) {
          User.description = req.body.description;
        }
       
        User.save(function(err) {
          // if there is an error console.log that something went wrong!
          if (err) {
              console.log("Returned error", err);
              res.json({message: "Error", error: err});
          } else { // else console.log that we did well and then redirect to the root route
              console.log('successfully edited a task!');
              res.json(user)
          }
        })
      }
    })
})
app.delete('/users/:id', function(req,res){
    User.remove({_id:req.params.id},function(err){
        if(err){
            res.json({message:"Error",error:err});
        }else{
            res.json({message:"Success"})
        }
    })
})

// app.listen(8000, function() {
//     console.log("listening on port 8000");
// })
app.listen(port,() =>{
    console.log('Server is up and running on port number ' + port);
});