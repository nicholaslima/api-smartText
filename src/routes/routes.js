
const express = require('express');
const routes = express.Router();

const routesPlayer = require('./routesPlayer');
const routesTexts = require('./routesTexts');
const routesGame = require('./routesGame');
const routesSession = require('./routesSessions');



routes.use('/player',routesPlayer);
routes.use('/texts',routesTexts);
routes.use('/game',routesGame);

routes.use('/user',routesSession);


module.exports = routes;