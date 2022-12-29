const express = require('express');
const routerUsers = express.Router();
const Users = require('../models/users')


routerUsers.get('/',async (req,res)=> {
        const data = await Users.findAll()
    
        res.json(data)
})

routerUsers.get('/:id',async (req,res)=> {
    const data = await Users.findOne({
        where:{
            id: req.params.id
        }
    })
    res.json(data)
})

routerUsers.post('/', async (req,res)=> {
    const data = await Users.create(req.body);

    res.json(data)
})

routerUsers.delete('/:id', async (req,res)=> {
    const data = await Users.destroy({
        where: {
            id: req.params.id
        }
    })
    res.send(`Registro con id: ${req.params.id} eliminado. Data: ${data}` )
})


//IMPORTANTE LA CLAUSULA WHERE CUANDO HACEMOS .put() . EN OTRAS ORM NO TE AVISA Y BORRA TODA LA DB.

routerUsers.put('/:id', async (req,res)=> {
    const data = await Users.update(req.body,{
        where: {
            id: req.params.id
        }
    })
    res.json(data)
})


module.exports = routerUsers


