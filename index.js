const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');
const connection = require('./database/connection');
const slugify = require('slugify');

// Database Connection
connection.authenticate().then(() => {
  console.log('Database Ok');
}).catch((err) => {
  console.log(err);
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());

// View Engine
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

// Express Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});