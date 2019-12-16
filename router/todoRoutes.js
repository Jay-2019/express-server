//Routes - The API routes maps to the Controllers
// List All EndPoints
const express = require('express');
const router = express.Router();
// const todoController = require('../controller/todoController');
const todoServices = require('../service/todoServices')

//signUp routes
router.post('/signUp', todoServices.signUp);

//create new todo
router.post('/add', todoServices.addNewTodo);

// list of all todo
router.get('/listTodo', todoServices.listAllTodo);

// edit particular todo
router.get('/:id', todoServices.editTodo);

// store updated todo
router.post('/update/:id', todoServices.updateTodo);

module.exports = router;