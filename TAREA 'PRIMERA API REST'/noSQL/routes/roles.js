const express = require('express');
const routerRoles = express.Router();
const rolesModel = require('../schemas/roles');


routerRoles.get('/', (req, res) => {
    rolesModel.find({}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



routerRoles.get('/:id',(req,res)=>{
    rolesModel.find({id : req.params.id}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})




routerRoles.post('/', (req, res) => {
    console.log('el body de la request es:', req.body)

    const user = new usersModel(req.body)
    user.save()
    .then((document) => {
        res.json({ 'status': 200, data: { document } })

    })
    .catch((error) => {
        res.send({ 'status': 500, data: error })
    })

})



routerRoles.delete('/:id',(req,res)=> {
    rolesModel.findOneAndDelete({id : req.params.id},{}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })

})



routerRoles.put('/:id',(req,res)=> {
    rolesModel.findOneAndUpdate({id : req.params.id}, req.body ,{new:true}, (error,data)=> {
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



module.exports = routerRoles