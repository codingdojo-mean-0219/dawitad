const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    getAuthors:function(req, res){
        Author.find({},function(err,data){
            if(err){
                console.log(error)
                res.json({
                    message: "Error",
                    error:  error                
                });

            }else{
                console.log(data);
                res.json({
                    message:"Success",
                    data:data
                });
            };
        });
    },

    getAuthor: function(req,res){
        Author.findOne({_id:req.params.id},function(err,data){
            if(err){
                console.log(err);
                res.json({
                    message:"Error",
                    error:err
                })
            }else{
                console.log(data);
                res.json({
                    message:"Success",
                    data: data
                });
            };
        } );
    },

    create: function(req,res){
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        }else{
        const author = new Author(req.body);
        author.save(function(err){
            if(err){
                console.log(err);
                res.json({
                    message:"Error",
                    error:err
                })
            }else{
                console.log()
                res.json({
                    message:"Success",
                    error:err
                });
            };
        });
    }
    },

    update: function(req,res){
        if (request.body.name.length < 3) {
            response.json({
                message: "Error",
                error: "Author name is too short! Name should be at least 3 character!"
            });
        }else{

            Author.findByIdAndUpdate({_id:req.params.id},{
                name:req.body.name,
                description:req.body.description
            }, function(err,data){
                if(err){
                    console.log(err);
                    res.json({
                        message:"Error",
                        error:err
                    })
                }else{
                    res.json({
                        Message:"Success",
                        data:data
                    });
                };
            });
        }


    },
    delete:function(req,res){
        Author.findByIdAndDelete({_id:req.params.id},
           function(err, data) {
               if(err){
                   console.log(err);
                   res.json({
                       message:"error",
                       error:err
                   })
               }else{
                   console.log("Successfully Removed from Database");
                   res.json({
                       message:"Success",
                       data: data
                   });
               };
           });
    }
};