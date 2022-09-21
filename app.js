const express = require('express');
const db = require('./config/dbConfig');
const bookRoute = require('./routes/bookRoute')
require('dotenv').config();

const app = express();

const port = process.env.PORT;

db.mongodbConnect();

app.use(express.json());
app.use('/books', bookRoute)
// Connecting to MongoDB instance

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.listen(port, () => {
    console.log(`Server started on port localhost:${port}`)
})

