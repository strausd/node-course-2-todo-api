var mongoose = require("mongoose");

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        // Trims off any whitespace at the beginning and end of string
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        required: true,
        type: mongoose.Schema.Types.ObjectId
    }
});

module.exports = {Todo};