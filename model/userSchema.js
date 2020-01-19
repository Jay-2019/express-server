
//Models - The schema definition of the Model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userProfileSchema = new Schema({
    profileImage: {
        data: Buffer,
        contentType: String
    },
    userName: {
        type: String,
        // unique: true,
        required: true
    },
    gender: {
        type: String
    },
    email: {
        type: String,
        // lowercase: true,
        // unique: true,
        required: true
    },
    createPassword: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },

    termsAndConditions: {
        type: Boolean,
        required: true
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
let userProfile = mongoose.model('userProfileSchema', userProfileSchema, 'userProfile');
module.exports = { userProfile };