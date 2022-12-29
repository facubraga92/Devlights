const express = require('express');
const app = express();
app.use(express.json())
app.listen(3000);





const routerApi = require('./routes/api');
const routerUsers = require('./routes/users');
const routerRoles = require('./routes/roles');
const routerTasks = require('./routes/tasks');

app.use('/api',routerApi);
routerApi.use('/users',routerUsers);
routerApi.use('/roles',routerRoles);
routerApi.use('/tasks',routerTasks);




//SEQUELIZE:


const Users = require('./models/users');
const Roles = require('./models/roles');
const Tasks = require('./models/tasks');

//ESTO ES PARA SINCRONIZAR LOS MODELOS DE NUESTRA DB.
Users.sync();
Roles.sync();
Tasks.sync();


//COMO MIDDLEWARES DE SEQUELIZE ENCONTRÉ SUS ANÁLOGOS QUE APARENTEMENTE LOS LLAMAN HOOKS.


