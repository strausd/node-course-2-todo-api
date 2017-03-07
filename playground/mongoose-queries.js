const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = '58bf27e6c8ffd12e1343a2af11';

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// });

// User.findById('58bee1d0c036e30a1068539a').then((user) => {
//     if (!user) {
//         return console.log('User not found');
//     }
    
//     console.log('User by ID', user);
    
// }).catch((e) => {
//     console.log(e);
// });

User.findById('58bee1d0c036e30a1068539a').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }
    
    console.log('User by ID', user);
    
}, (e) => {
    console.log(e)
})