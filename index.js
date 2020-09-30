const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const moment = require('moment');

// Express Server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});