/* eslint-disable no-console */
'use strict';
const { CREATED } = require('http-status-codes').StatusCodes;
const { createStation } = require('../services');

const createTodo = fastify => async (request, reply) => {
  const { body } = request;

  const station = await createStation({ fastify, body });

  return reply.code(CREATED).send(station);
};

module.exports = createTodo;
