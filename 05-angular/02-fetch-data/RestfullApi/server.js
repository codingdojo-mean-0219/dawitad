
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');

var TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
   })
mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User'
var Task = mongoose.model('Task')

// Use native promises
mongoose.Promise = global.Promise;

//Routes
// 1.Retrive the tasks
app.get('/tasks', function(req, res) {
    Task.find({},function(err, tasks){
        if(err){
            console.log("Returned error", err);
            res.json({message:"Error",error:err})
        }else{
            res.json({message:"Success", data:tasks});
        }
    })
 
})

//2. Retrive a task by Id

app.get('/tasks/:id',function(req,res){
    Task.findOne({_id:req.params.id}, function(err,tasks){
        if (err){
            console.log("Returned error",err);
            res.json({message:"Error", error:err});
        }else{
            res.json({message:"Success", data: tasks});
        }
    })
})

//3. Create a task
app.Post('/tasks',function(req,res){
    console.log("POST/tasks");
    console.log(req.body);
    var task = new task({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed
    });
    task.save(function(err){
        if(err){
            res.json({message:"Error",error:err})
        }else{
            res.json({message:"Success", data:task})
        }
    })
})

//4. Update task by Id

app.put('/tasks/:id', function(req,res){
    var mytask ={};
    if(req.body.title){
        mytask['title'] = req.body. title;
    } 
    if(req.body.description){
        mytask['description'] = req.body.description;
    }
    if(req.body.completed != null){
        mytask['completed'] = req.body.completed;
    }
    mytask['updated at'] = Date.now();
    Task.update({ _id: req.params.id }, {
        $set: obj
    }, function (err, tasks) {
        if (err) {
            res.json({ message: "Error", error: err })
        } else {
            res.json({ message: "Success", data: task })
        }
    });
})

    //5. Delete a tasks by ID
app.delete('/tasks/:id', function(req,res){
    Task.remove({_id:req.params.id},function(err){
        if(err){
            res.json({message:"Error",error:err})
        }else{
            res.json({message:"Success"})
        }
    });
})



// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});