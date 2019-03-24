mongoose.connect('mongodb://localhost/book');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AuthorSchema = new Schema({
    first_name : { type : String },
    last_name : { type : String, },
    Country: { type : String,minlength: 6 },
    Birth_Date: { type : Date}   
}, { timestamps : true });

var BookSchema = mongoose.Schema({
    title : { type : String, minlength: 3 },    
    publication_year: { type : Date}   
}, { timestamps : true });

   mongoose.model('Author', AuthorSchema); 
   const Author = mongoose.model('author');
   const Book = mongoose.model('book');

   module.exports =  Author;
   module.exports =  Book;