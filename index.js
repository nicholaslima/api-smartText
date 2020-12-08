

require('express-async-errors');

const express = require('express');
const error = require('./src/middleware/MiddlewareErrors');
const route = require('./src/routes/routes.js');

const cors = require('cors');

const app = new express();

app.use(cors());
app.use(express.json());

app.use(route);
app.use(error);

app.listen(3333, () => {
    console.log('server is runing')
});