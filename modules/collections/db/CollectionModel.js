const mongoose = require('mongoose')
const materializedPlugin = require('mongoose-materialized')
const Schema = mongoose.Schema



const CollectionSchema = new Schema({
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

CollectionSchema.plugin(materializedPlugin)

module.exports = mongoose.model('collection', CollectionSchema)
