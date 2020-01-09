//Models - The schema definition of the Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({

    Description: {
        type: String,
        required: true
    },
    Responsible: {
        type: String,
        required: true
    },
    Priority: {
        type: String,
        required: true
    },
    Completed: {
        type: String,
        required: true
    }
});

let myTodo = mongoose.model('todoSchema', todoSchema, 'myTodo');
module.exports = { myTodo };