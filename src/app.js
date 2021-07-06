const express = require('express');
const cors = require('cors');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);


// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES 
app.use('/api/users', require('./routes/user.routes')) 
app.use('/api/product', require('./routes/product.routes')) 

module.exports = app;
