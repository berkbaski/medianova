const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
        },
        password: {
            type: String
        }
    },
    {timestamps: true}
)

userSchema.plugin(autopopulate)

module.exports = mongoose.model('User', userSchema)
