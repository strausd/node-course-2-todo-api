const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id = '58c05e54dd1741fa236ad9bd'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('58c05dcf58fe94d62338bfa4').then((todo) => {
//     console.log(todo)
// });