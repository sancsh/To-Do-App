var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
    username: String,
    todo: String,
    done: Boolean,
    hasAttachment: Boolean
});

var todos = mongoose.model('Todos', todoSchema);

module.exports = todos;