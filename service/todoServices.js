//Services - The services contains the database queries and returning objects or throwing errors.

const{myTodo}=require('../model/todoSchema');
const{userProfile}=require('../model/userSchema');

//signUp routes
exports.signUp = (req, res) => {
    let newUser = new userProfile(req.body);
    newUser.save()
        .then(signUp => {
            req.status(200).json({ 'signUp': 'signUp successfully' });
        })
        .catch(err => {
            res.status(400).send('signUp failed');
            console.log(err.message);
        });
};
//create new todo
exports.addNewTodo = (req, res) => {
    let todo = new myTodo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({ 'todo': 'todo added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
            console.log(err.message);
        });
};
// list of all todo
exports.listAllTodo = (req, res) => {
    myTodo.find((err, todos) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(todos);
        }
    });
};
// edit particular todo
exports.editTodo = (req, res) => {
    let id = req.params.id;
    console.log(id);
    myTodo.findById(id, (err, todos) => {
        if (err) {
            console.log(err.message);
        } else {
            res.json(todos);
        }

    });
};
// store updated todo
exports.updateTodo = (req, res) => {
    myTodo.findById(req.params.id, (err, todos) => {
        if (!todos)
            res.status(404).send("data is not found");
        else
        todos.Description = req.body.Description;
        todos.Responsible = req.body.Responsible;
        todos.Priority = req.body.Priority;
        todos.Completed = req.body.Completed;

        todos.save().then(todos => {
            res.json('Todo updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};