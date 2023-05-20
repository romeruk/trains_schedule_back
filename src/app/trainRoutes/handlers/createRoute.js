/* eslint-disable no-console */
'use strict';
const { CREATED } = require('http-status-codes').StatusCodes;
const { createRoute: createRouteService } = require('../services');

const createRoute = fastify => async (request, reply) => {
  const { body } = request;

  const station = await createRouteService({ fastify, body });

  return reply.code(CREATED).send(station);
};

module.exports = createRoute;
