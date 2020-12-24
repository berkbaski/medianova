const express = require('express')
const jwt = require('jsonwebtoken');

const Users = require('../models/users')

const router = express.Router()

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const loggedUser = await Users.find({username, password});
    if (loggedUser) {
        jwt.sign({
            id: loggedUser._id,
            username: loggedUser.username
        }, process.env.TOKEN_SECRET_KEY || '123456', {expiresIn: '10h'}, (err, token) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(token)
            }
        });
    } else {
        res.status(401).send('Wrong username or password');
    }
})

router.post('/register', async (req, res) => {
    const {username, password} = req.body;

    const isValid = Users.find({username});
    if (isValid) {
        res.status(401).send('Username already taken')
    } else {
        const newUser = new Users({
            username,
            password
        })
        await newUser.save();

        jwt.sign({
            id: newUser._id,
            username: newUser.username
        }, process.env.TOKEN_SECRET_KEY, {expiresIn: '10h'}, (err, token) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.send(token)
            }
        });
    }
})

module.exports = router
