//Routes - The API routes maps to the Controllers
// List All EndPoints

const express = require('express');
const router = express.Router();
// const todoController = require('../controller/todoController');
const todoServices = require('../service/todoServices')

//signUp routes
router.post('/signUp', todoServices.signUp);

// user Authentication
router.get('/authentication', todoServices.authentication);

//get current User(logged-In) Id
router.get('/currentUser/:email/:password', todoServices.currentUser);

//create new todo
router.post('/createTodo', todoServices.addNewTodo);

// list of all todo
router.get('/listTodo', todoServices.listAllTodo);

// edit particular todo
router.get('/editTodo/:id', todoServices.editTodo);

// delete particular todo
router.get('/deleteTodo/:id', todoServices.deleteTodo);

// store updated todo
router.post('/updateTodo/:id', todoServices.updateTodo);

module.exports = router;