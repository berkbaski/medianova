const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {title: 'Express'})
})

router.get('/ping', (req, res) => {
    console.log('err')
    res.sendStatus(200)
})

module.exports = router
