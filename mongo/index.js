const mongoose = require('mongoose');
require("dotenv").config();

mongoose.connect(`mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@localhost:27022/app?authSource=admin`);


const mongo = mongoose.connection;
mongo.on('error', (error) => console.error(error));
mongo.once('open', () => {
    console.log('connected to database');
});

module.exports = mongo;