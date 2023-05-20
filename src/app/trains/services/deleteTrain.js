'use strict';

const { TrainRepository } = require('../repository');

const deleteTrain = async ({ fastify, trainId }) => {
  const { TrainRepo } = TrainRepository;
  const { deleteTrain: deleteTrainRepo } = TrainRepo(fastify);
  const deletedTrain = deleteTrainRepo(fastify.knex)({
    trainId
  });

  return deletedTrain;
};

module.exports = deleteTrain;
