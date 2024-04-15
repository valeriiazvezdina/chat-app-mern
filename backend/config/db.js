const mongoose = require('mongoose');

const MONGODB_CONNECTION_URL = process.env.MONGODB_CONNECTION_URL;

async function connectDb() {
    try {
        await mongoose.connect(MONGODB_CONNECTION_URL);
        console.log('Successful connection to MongoDb');
    } catch(err) {
        console.log('Error connecting MongoDB', err);
    }
}

module.exports = {
    connectDb
};