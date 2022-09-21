const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2022, 'Year must be less than 2022']
    },
    isbn: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

const bookModel = mongoose.model('Book', bookSchema)

module.exports = { bookModel }
