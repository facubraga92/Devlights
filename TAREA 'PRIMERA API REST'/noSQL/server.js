const express = require('express');
const app = express();
app.use(express.json())
app.listen(3000);

const login = require('./middlewares/login');
app.use(login);

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/DB_SQL',{},(error)=> {
    if (error) {
        console.log('Hubo un error en la conexión a la base de datos MongoDB.')
    } else {
        console.log('Conexión exitosa a la base de datos MongoDB.')
    }
})


const routerUsers = require('./routes/users');
const routerRoles = require('./routes/roles');
const routerTasks = require('./routes/tasks');



app.use('/users',routerUsers);
app.use('/roles',routerRoles);
app.use('/tasks',routerTasks);