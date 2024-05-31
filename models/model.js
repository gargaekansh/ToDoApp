const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Todo', todoSchema)


// name: { type: String, required: true }

//var Todo = mongoose.model("Todo", todoSchema);