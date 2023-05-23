'use strict';

const {
  createRouteSchema,
  deleteRouteSchema,
  updateRouteSchema,
  getAllRoutesSchema
} = require('../schemas');
const { createRoute, deleteRoute, getRoute, updateRoute, getAllRoutes } = require('../handlers');

module.exports = async fastify => {
  fastify.route({
    method: 'POST',
    url: '/',
    schema: createRouteSchema,
    handler: createRoute(fastify)
  }),
    fastify.route({
      method: 'GET',
      url: '/',
      schema: getAllRoutesSchema,
      handler: getAllRoutes(fastify)
    }),
    fastify.route({
      method: 'DELETE',
      url: '/:routeId',
      schema: deleteRouteSchema,
      handler: deleteRoute(fastify)
    }),
    fastify.route({
      method: 'GET',
      url: '/:routeId',
      // schema: deleteRouteSchema,
      handler: getRoute(fastify)
    }),
    fastify.route({
      method: 'PATCH',
      url: '/:routeId',
      schema: updateRouteSchema,
      handler: updateRoute(fastify)
    });
};
