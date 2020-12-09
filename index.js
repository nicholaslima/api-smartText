

require('express-async-errors');
require('dotenv').config();

const express = require('express');
const error = require('./src/middleware/MiddlewareErrors');
const route = require('./src/routes/routes.js');

const cors = require('cors');

const app = new express();

app.use(cors());
app.use(express.json());

app.use(route);
app.use(error);


const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log('server is runing')
});