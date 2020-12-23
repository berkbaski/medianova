const express = require('express')
const Todos = require('../models/todos')

const router = express.Router()

router.get('/', async (req, res) => {
    res.send(await Todos.find({isDone: false}))
})

router.post('/', async (req, res) => {
    const newTodo = new Todos({
        ...req.body,
        isDone: false,
        createdDate: new Date(),
        doneDate: null
    })
    res.send(await newTodo.save())
})

router.put('/', async (req, res) => {
    const {id} = req.body;
    await Todos.findByIdAndUpdate(id, {isDone: true, doneAt: new Date()})
    res.sendStatus(200)
})

module.exports = router
