//Services - The services contains the database queries and returning objects or throwing errors.

const { myTodo, userProfile } = require('../model/schema');

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
exports.editTodo = () => {
    let id = req.params.id;
    myTodo.findById(id, (err, todo) => {
        res.json(todo);
    });
};
// store updated todo
exports.updateTodo = () => {
    myTodo.findById(req.params.id, (err, todo) => {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.Description = req.body.Description;
        todo.Responsible = req.body.Responsible;
        todo.Priority = req.body.Priority;
        todo.Completed = req.body.Completed;

        todo.save().then(todo => {
            res.json('Todo updated!');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
};