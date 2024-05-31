const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Todo', todoSchema)

