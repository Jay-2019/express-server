//Models - The schema definition of the Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema({

    Description: {
        type: String
    },
    Responsible: {
        type: String
    },
    Priority: {
        type: String
    },
    Completed: {
        type: Boolean
    }
});

let userProfileSchema = new Schema({
    profileImage: {
        data: Buffer,
        contentType: String
    },
    userName: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
    createPassword: {
        type: String
    },
    confirmPassword: {
        type: String
    },

    termsAndConditions: {
        type: Boolean
    },
    signupDate: {
        type: Date,
        default: Date.now
    },
    isUserExist: {
        type: Boolean
    },
    myTodo: {
        type: Schema.Types.ObjectId,
        ref: 'todoSchema'
    }
});

let myTodo = mongoose.model('todoSchema', todoSchema, 'myTodo');
let userProfile = mongoose.model('userProfileSchema', userProfileSchema, 'userProfile');
module.exports = { myTodo, userProfile };