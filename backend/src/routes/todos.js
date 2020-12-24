const express = require('express')
const jwt = require('jsonwebtoken');

const Todos = require('../models/todos')

const {SECRET_KEY, verify} = require('../const/token')

const router = express.Router()

router.get('/', verify, async (req, res) => {
    jwt.verify(req.token, SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const minDoneDate = new Date();
            minDoneDate.setDate(minDoneDate.getDate() - 2);

            res.send(await Todos
                .find({$and: [{createdUserId: authData.id}, {$or: [{isDone: false}, {$and: [{isDone: true}, {doneAt: {'$gt': minDoneDate}}]}]}]})
                .sort({isDone: false}));
        }
    });
})

router.post('/', verify, async (req, res) => {
    jwt.verify(req.token, SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const createdUserId = authData.id;

            const newTodo = new Todos({
                ...req.body,
                createdUserId,
                isDone: false,
                createdDate: new Date(),
                doneDate: null,
            })
            res.send(await newTodo.save())
        }
    });
})

router.delete('/:id', verify, async (req, res) => {
    jwt.verify(req.token, SECRET_KEY, async (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            const {id} = req.params;
            res.send(await Todos.deleteOne({_id: id}))
        }
    });
})

router.post('/done', async (req, res) => {
    const {id} = req.body;
    await Todos.findOneAndUpdate({_id: id}, {isDone: true, doneAt: new Date()})
    res.sendStatus(200)
})

router.post('/rollbackDone', async (req, res) => {
    const {id} = req.body;
    await Todos.findOneAndUpdate({_id: id}, {isDone: false, doneAt: null})
    res.sendStatus(200)
})

router.post('/doneAll', async (req, res) => {
    await Todos.updateMany({isDone: false}, {isDone: true, doneAt: new Date()})
    res.sendStatus(200)
})


module.exports = router
