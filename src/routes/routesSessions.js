

const { Router } = require('express');
const sessionController = require('../controllers/sessionController.js');


const routes = Router();

routes.post('/auth',sessionController.auth);
routes.post('/create',sessionController.createUser);

module.exports = routes;