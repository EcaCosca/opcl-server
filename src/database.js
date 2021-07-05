const mongoose = require('mongoose');

const URI = 'mongodb://localhost/mernstack';

mongoose.connect(URI, {
    useNewUrlParser: true;
})