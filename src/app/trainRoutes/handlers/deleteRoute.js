/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { deleteRoute: deleteRouteService } = require('../services');
const errors = require('../../../errors/domain/errors');

const deleteRoute = fastify => async (request, reply) => {
  const { routeId } = request.params;

  const route = await deleteRouteService({ fastify, routeId });

  console.log(route);
  if (!route) {
    return errors.RouteNotFound();
  }

  return reply.code(OK).send(route);
};

module.exports = deleteRoute;
