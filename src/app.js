const express = require('express');
const cors = require('cors');
const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);


// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES 
app.get('/api/users', (req, res) => res.send('User routes')) 
app.get('/api/notes', (req, res) => res.send('Notes routes')) 

module.exports = app;
