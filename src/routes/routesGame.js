

const express = require('express');
const gameController = require('../controllers/gameController');
const routes =  express.Router();
const authentication = require('../middleware/MiddlewareAuth');

routes.use(authentication);


routes.post('/player?:id',gameController.post);
routes.get('/',gameController.index);
routes.get('/player?:id',gameController.gamesPlayer);


module.exports = routes;