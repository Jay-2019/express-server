const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = require('./router/todoRoutes');
const port = 4000;
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use(cookieParser());

//mongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useUnifiedTopology: true, useNewUrlParser: true,useCreateIndex: true, });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

server.use('/todos', todoRoutes);
server.listen(port, () => console.log(`!!!Express Server is Running on port => ${port}`));