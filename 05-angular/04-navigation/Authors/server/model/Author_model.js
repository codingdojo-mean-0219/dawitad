const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    } 
}, 
    {
        timestamps:true
    
   });
   mongoose.model('Author', AuthorSchema); 
   var Author = mongoose.model('Author') 

   module.exports = Author;