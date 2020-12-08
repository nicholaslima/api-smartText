

const { Router } = require('express');

const playerController = require('../controllers/playerController');

const routes = Router();

const authentication = require('../middleware/MiddlewareAuth');

routes.use(authentication);
routes.get('/',playerController.index);
routes.get('/player?:id',playerController.find);


module.exports = routes;

