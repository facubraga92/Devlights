const express = require('express');
const routerUsers = express.Router();
const usersModel = require('../schemas/users');



routerUsers.get('/', (req, res) => {
    usersModel.find({}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



routerUsers.get('/:id',(req,res)=>{
    usersModel.find({id : req.params.id}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})




routerUsers.post('/', (req, res) => {
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



routerUsers.delete('/:id',(req,res)=> {
    usersModel.findOneAndDelete({id : req.params.id},{}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })

})



routerUsers.put('/:id',(req,res)=> {
    usersModel.findOneAndUpdate({id : req.params.id}, req.body ,{new:true}, (error,data)=> {
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



module.exports = routerUsers