const mongoose = require('mongoose')

const clothSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    no_of_items:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('cloth',clothSchema)