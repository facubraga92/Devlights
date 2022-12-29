const express = require('express');
const routerRoles = express.Router();
const Roles = require('../models/roles')

routerRoles.get('/',async (req,res)=> {
    const data = await Roles.findAll()

    res.json(data)
})

routerRoles.get('/:id',async (req,res)=> {
const data = await Roles.findOne({
    where:{
        id: req.params.id
    }
})
res.json(data)
})

routerRoles.post('/', async (req,res)=> {
const data = await Roles.create(req.body);

res.json(data)
})

routerRoles.delete('/:id', async (req,res)=> {
const data = await Roles.destroy({
    where: {
        id: req.params.id
    }
})
res.send(`Registro con id: ${req.params.id} eliminado. Data: ${data}` )
})


//IMPORTANTE LA CLAUSULA WHERE CUANDO HACEMOS .put() . EN OTRAS ORM NO TE AVISA Y BORRA TODA LA DB.

routerRoles.put('/:id', async (req,res)=> {
const data = await Roles.update(req.body,{
    where: {
        id: req.params.id
    }
})
res.json(data)
})





module.exports = routerRoles


