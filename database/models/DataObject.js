const mongoose = require('mongoose')
const materializedPlugin = require('mongoose-materialized')
const Schema = mongoose.Schema



const DataObjectSchema = new Schema({
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

DataObjectSchema.plugin(materializedPlugin)

module.exports = mongoose.model('dataobject', DataObjectSchema)
