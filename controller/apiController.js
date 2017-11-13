var todos = require('../models/todoModels');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/todos/:uname', function(req, res){
        todos.find({username: req.params.uname}, function(err,results){
                if(err)
                    throw err;

                res.send(results);
        });

    });

    app.get('/api/todos/:id', function(req,res){
        todos.findById({_id: req.params.id}, function(err, results){
            if(err)
                throw err;

            res.send(reults);
        });
    });

    app.post('/api/todos', function(req,res){

        if(req.body.id)//updating an exiting todo
            {
                todos.findByIdAndUpdate(req.body.id, {todo:req.body.todo, isDone:req.body.isDone, 
                    hasAttachment: req.body.hasAttachment}, function(err, todo){
                            if(err) throw err;
                            res.send('Updated todo');
                    });
            }
            //creating a new one
            else{

                var newTodo = todos({
                    username:'test',
                    todo: req.body.todo,
                    isDone:false,
                    hasAttachment:false
                });

                newTodo.save(function(err){
                    if(err) throw err;

                    res.send("added a new todo ");
                });
            }
    });

    app.delete('/api/todo', function(req, res){
        todos.findByIdAndRemove(req.body.id, function(err){
            if(err) throw err;

            res.send('removed the todo');
        })
    })
}