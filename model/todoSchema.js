//Models - The schema definition of the Model

const mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
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
    },
    user: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }]
});

todoSchema.plugin(timestamps);
module.exports = mongoose.model('myTodo', todoSchema, 'myTodo');