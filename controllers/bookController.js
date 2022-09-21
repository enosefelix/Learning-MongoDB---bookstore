const { bookModel } = require('../model/book');
// console.log(book)

async function getBooks(req, res) {
    bookModel.find()
        .then((books) => {
            res.status(200).send(books)
        }).catch((e) => {
            console.log(e)
            res.status(500).send(e.message)
        })
}

async function addBook(req, res) {
    const book = req.body;
    bookModel.create(book)
        .then((book) => {
            res.status(201).send({
                message: 'Book Added Successfully',
                data: book
            })
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function getBookById(req, res) {
    const id = req.params.id;
    bookModel.findById(id)
        .then((book) => {
            res.status(200).send( book )
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function updateBook(req, res) {
    const id = req.params.id;
    const book = req.body;
    bookModel.findByIdAndUpdate(id, book, {new:true})
        .then((book) => {
            res.status(200).send( book )
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function deleteBook(req, res) {
    const id = req.params.id;
    bookModel.findByIdAndDelete(id)
        .then((book) => {
            res.status(200).send(`Book Deleted Successfully, ${book}`)
        }).catch((e) => {
            res.status(404).send(e)
        })
}

module.exports = {
    getBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook
}