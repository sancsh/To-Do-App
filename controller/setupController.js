var todos = require('../models/todoModels');

module.exports = function(app){
    app.get('/', function(req, res){
        var starterToDo = [ 
            {
                username: 'test',
                todo: 'buy milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'buy data',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'eat something',
                isDone: false,
                hasAttachment: false
            }
        ];
        todos.create(starterToDo, function(err,resuts){
            if(err)
                console.log(err);
            else{
                res.send(resuts);
            }
        });

    });
}