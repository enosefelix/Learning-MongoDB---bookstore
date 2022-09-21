const express = require('express');
const authorController = require('../controllers/authorController')

const authorRoute = express.Router();

authorRoute.get('/', authorController.getAuthors)

authorRoute.post('/', authorController.addAuthor)

authorRoute.get('/:id', authorController.getAuthorById)

authorRoute.put('/:id', authorController.updateAuthor)

authorRoute.delete('/:id', authorController.deleteAuthor)


module.exports = authorRoute
