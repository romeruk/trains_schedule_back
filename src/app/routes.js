'use strict';

const { errorHandler } = require('../errors');
const trainRoutes = require('./trains/routes');
const stationRoutes = require('./stations/routes');
const trainRouteRoutes = require('./trainRoutes/routes');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler());
  fastify.register(trainRoutes, { prefix: '/v1/trains' });
  fastify.register(stationRoutes, { prefix: '/v1/stations' });
  fastify.register(trainRouteRoutes, { prefix: '/v1/routes' });
};
