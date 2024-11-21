const { Router } = require('express');

const taksRouter = require('./taksRouter');

const mainRouter = Router();


// Configurar los routers

mainRouter.use('/taks', taksRouter);