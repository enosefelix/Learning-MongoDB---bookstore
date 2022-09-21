const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_DB_CONNECTION_URL = process.env.MONGO_DB_CONNECTION_URL;

function mongodbConnect() {
    mongoose.connect(MONGO_DB_CONNECTION_URL)

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB Successfully')
    })
    
    mongoose.connection.on('error', (e) => {
        console.log(e);
        console.log('An Errror Occured While Connecting to MongoDB')
    })
}



module.exports = {mongodbConnect};