const express = require('express')
const Users = require('../models/user')

const router = express.Router()

router.get('/', async (req, res) => {
    res.send(await Users.find())
})

module.exports = router
