var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
mongoose.connect('mongodb://test:test@ds157529.mlab.com:57529/node-todo-api');

module.exports = {mongoose};