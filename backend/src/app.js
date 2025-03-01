const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config();

const indexRouter = require('./routes/index')
const todosRouter = require('./routes/todos')
const authRouter = require('./routes/auth')

require('./database-connection')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cors());

app.use('/', indexRouter)
app.use('/todos', todosRouter)
app.use('/auth', authRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

// error handler
/* eslint-disable-next-line */
app.use((err, req, res, next) => {
    const error = {
        status: err.status || 500,
        message: err.message,
    }

    if (req.app.get('env') === 'development') {
        error.stack = err.stack
    }

    res.status(error.status)

    res.send(error)
})

module.exports = app
