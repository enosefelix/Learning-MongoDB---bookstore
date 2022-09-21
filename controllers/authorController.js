const { authorModel } = require('../model/author');
// console.log(author)

async function getAuthors(req, res) {
    authorModel.find()
        .then((authors) => {
            res.status(200).send(authors)
        }).catch((e) => {
            console.log(e)
            res.status(500).send(e.message)
        })
}

async function addAuthor(req, res) {
    const author = req.body;
    authorModel.create(author)
        .then((author) => {
            res.status(201).send({
                message: 'Author Added Successfully',
                data: author
            })
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function getAuthorById(req, res) {
    const id = req.params.id;
    authorModel.findById(id)
        .then((author) => {
            res.status(200).send(author)
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function updateAuthor(req, res) {
    const id = req.params.id;
    const author = req.body;
    authorModel.findByIdAndUpdate(id, author, { new: true })
        .then((author) => {
            res.status(200).send(author)
        }).catch((e) => {
            res.status(404).send(e)
        })
}

async function deleteAuthor(req, res) {
    const id = req.params.id;
    authorModel.findByIdAndDelete(id)
        .then((author) => {
            res.status(200).send(`Author Deleted Successfully, ${author}`)
        }).catch((e) => {
            res.status(404).send(e)
        })
}

module.exports = {
    getAuthors,
    addAuthor,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}