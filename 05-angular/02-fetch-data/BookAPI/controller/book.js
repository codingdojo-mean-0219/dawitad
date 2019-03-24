var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Author = require('../model/book');
// const express = require('express');
// const router = express.Router();



module.exports = {
    authors :function(request,response){
        author.Find({}, function(err,authors){
            if(err) {
                console.log("An error was encountered", err);

                response.json({ message : "Error", error : err });
            }
            else {
                response.json(authors);
            } 
        })
    },
    author: function(request, response){
        author.findById({ _id : request.params.AuthorId }, function(err, author){
            if(err) {
                console.log("An error was encounter", err);
                response.json({ message : "Error", error : err });
            }
            else {
                response.json(author);
            }
        });
    },
    NewAuthor: function(request, response){

        var Newauthor = new Author(request.body);
        console.log(data);
        Newauthor.save(err =>{
            if(err){
                console.log("An error occurred", err);
                response.json({ message : "Error", error : err });
            }
            else {
                response.redirect('/api/tasks/'+task._id);
            }
        });
    },
    editAuthor: function(request, response){
        var data = request.body;
        console.log(data);
        console.log(request.params.id);
        Author.findByIdAndUpdate(request.params.id, data, function(err, author){
            if(err) {
                console.log("An error occurred", err);
                response.json({ message : "Error", error : err });
            }
            else {
                response.redirect('/api/tasks/'+task._id);
            }
        });
    },
    delete: function(request, response){
        Task.remove({ _id : request.params.id }, function(err, task){
            if(err) {
                console.log("An error occurred", err);
                response.json({ message : "Error", error : err });
            }
            else {
                response.redirect('/api/tasks/');
            }
        })
    }
}

