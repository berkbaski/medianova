const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://localhost'
mongoose.set('debug', true)
mongoose.set('useFindAndModify', false);

mongoose
    .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connection established.'))
    .catch(console.log)

module.exports = mongoose.connection
