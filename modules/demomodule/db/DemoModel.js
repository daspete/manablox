const mongoose = require('mongoose')
const Schema = mongoose.Schema



const DemoModel = new Schema({
    title: {
        type: String,
        required: true
    },

    slug: {
        type: String
    },

    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('collection', DemoModel)
