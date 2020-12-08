

const { Router }  = require('express');
const authentication = require('../middleware/MiddlewareAuth');
const textsController = require('../controllers/textsController');
const routes = Router();

routes.get('/',textsController.index);
routes.post('/',authentication,textsController.post);

module.exports = routes;