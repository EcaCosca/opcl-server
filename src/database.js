const mongoose = require('mongoose');

const URI = 'mongodb://localhost/opcl';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
})

const connection = mongoose.connection;