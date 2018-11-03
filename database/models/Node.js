const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const NodeSchema = new Schema({
    seo: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String
        },
    },

    slug: {
        type: String,
        required: true,
        unique: true
    },

    components: {
        type: Array,
        default: []
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

NodeSchema.pre('save', async function(next){

    next()
})

module.exports = mongoose.model('node', NodeSchema)
