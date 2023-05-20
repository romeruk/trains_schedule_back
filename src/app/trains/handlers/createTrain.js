/* eslint-disable no-console */
'use strict';
const { CREATED } = require('http-status-codes').StatusCodes;
const { createTrain } = require('../services');

const createTodo = fastify => async (request, reply) => {
  const { body } = request;

  const train = await createTrain({ fastify, body });

  return reply.code(CREATED).send(train);
};

module.exports = createTodo;
