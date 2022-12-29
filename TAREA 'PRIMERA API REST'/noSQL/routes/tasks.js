const express = require('express');
const routerTasks = express.Router();
const tasksModel = require('../schemas/tasks');


routerTasks.get('/', (req, res) => {
    tasksModel.find({}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



routerTasks.get('/:id',(req,res)=>{
    tasksModel.find({id : req.params.id}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})




routerTasks.post('/', (req, res) => {
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



routerTasks.delete('/:id',(req,res)=> {
    tasksModel.findOneAndDelete({id : req.params.id},{}, (error,data)=>{
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })

})



routerTasks.put('/:id',(req,res)=> {
    tasksModel.findOneAndUpdate({id : req.params.id}, req.body ,{new:true}, (error,data)=> {
        if (error) {
            res.send({ 'status': 500, data: error })
        } else {
            res.send({ 'status': 200, data })
        }
    })
})



module.exports = routerTasks