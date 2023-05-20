/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { updateRoute: updateRouteService } = require('../services');
const errors = require('../../../errors/domain/errors');

const updateRoute = fastify => async (request, reply) => {
  const { routeId } = request.params;
  const { body } = request;

  const route = await updateRouteService({ fastify, body, routeId });

  if (!route) {
    return errors.RouteNotFound();
  }

  return reply.code(OK).send(route);
};

module.exports = updateRoute;
