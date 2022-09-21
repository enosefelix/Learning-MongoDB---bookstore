const express = require('express');
const bookController = require('../controllers/bookController')

const bookRoute = express.Router();

bookRoute.get('/', bookController.getBooks)

bookRoute.post('/', bookController.addBook)

bookRoute.get('/:id', bookController.getBookById)

bookRoute.put('/:id', bookController.updateBook)

bookRoute.delete('/:id', bookController.deleteBook)


module.exports = bookRoute
