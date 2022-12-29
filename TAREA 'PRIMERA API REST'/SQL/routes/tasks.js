const express = require('express');
const routerTasks = express.Router();
const Tasks = require('../models/tasks')


routerTasks.get('/',async (req,res)=> {
    const data = await Tasks.findAll()

    res.json(data)
})

routerTasks.get('/:id',async (req,res)=> {
const data = await Tasks.findOne({
    where:{
        id: req.params.id
    }
})
res.json(data)
})

routerTasks.post('/', async (req,res)=> {
const data = await Tasks.create(req.body);

res.json(data)
})

routerTasks.delete('/:id', async (req,res)=> {
const data = await Tasks.destroy({
    where: {
        id: req.params.id
    }
})
res.send(`Registro con id: ${req.params.id} eliminado. Data: ${data}` )
})


//IMPORTANTE LA CLAUSULA WHERE CUANDO HACEMOS .put() . EN OTRAS ORM NO TE AVISA Y BORRA TODA LA DB.

routerTasks.put('/:id', async (req,res)=> {
const data = await Tasks.update(req.body,{
    where: {
        id: req.params.id
    }
})
res.json(data)
})




module.exports = routerTasks


