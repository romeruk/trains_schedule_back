'use strict';

const { StationRepository } = require('../repository');

const createTrain = async ({ fastify, body }) => {
  const { StationRepo } = StationRepository;
  const { createStation } = StationRepo(fastify);
  const createdTodo = createStation(fastify.knex)({
    body
  });
  return createdTodo;
};

module.exports = createTrain;
