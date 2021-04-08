const express = require('express');
const cors = require('cors')
const router = require('./router');

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public'))
app.use('/api', router);
app.use(require('./middlewares/error.handlers'));

module.exports = app;
