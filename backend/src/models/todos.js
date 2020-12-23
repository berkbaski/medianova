const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const todosSchema = new mongoose.Schema(
    {
        description: {
            type: String,
        },
        isDone: {
            type: Boolean,
        },
        doneAt: {
            type: Date,
        }
    },
    {timestamps: true}
)

todosSchema.plugin(autopopulate)

module.exports = mongoose.model('Todos', todosSchema)
