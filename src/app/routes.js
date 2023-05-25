'use strict';

const { errorHandler } = require('../errors');
const trainRoutes = require('./trains/routes');
const stationRoutes = require('./stations/routes');
const trainRouteRoutes = require('./trainRoutes/routes');
const boardRoutes = require('./board/route');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler());
  fastify.register(trainRoutes, { prefix: '/v1/trains' });
  fastify.register(stationRoutes, { prefix: '/v1/stations' });
  fastify.register(trainRouteRoutes, { prefix: '/v1/routes' });
  fastify.register(boardRoutes, { prefix: '/v1/board' });
};
