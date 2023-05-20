/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getRoute: getRouteService } = require('../services');
const errors = require('../../../errors/domain/errors');

const getRoute = fastify => async (request, reply) => {
  const { routeId } = request.params;

  const route = await getRouteService({ fastify, routeId });

  if (!route) {
    return errors.RouteNotFound();
  }

  return reply.code(OK).send(route);
};

module.exports = getRoute;
