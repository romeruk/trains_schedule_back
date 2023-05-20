'use strict';

const { TrainRepository } = require('../repository');

const createTrain = async ({ fastify, body }) => {
  const { TrainRepo } = TrainRepository;
  const { createTrain } = TrainRepo(fastify);
  const createdTrain = createTrain(fastify.knex)({
    body
  });
  return createdTrain;
};

module.exports = createTrain;
