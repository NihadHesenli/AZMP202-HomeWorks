const mongoose = require('mongoose')

const { Schema } = mongoose

const prdoSchema = new Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    imageUrl: { type: String, require: true }
},
    {versionKey : false , timestamps : true}
)

const products = mongoose.model('Products', prdoSchema)

module.exports = products