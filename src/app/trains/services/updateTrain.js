'use strict';

const { TrainRepository } = require('../repository');

const updateTrain = async ({ fastify, trainId, body }) => {
  const { TrainRepo } = TrainRepository;
  const { updateTrain: updateTrainRepo } = TrainRepo(fastify);
  const getTrain = updateTrainRepo(fastify.knex)({
    trainId,
    body
  });
  return getTrain;
};

module.exports = updateTrain;
