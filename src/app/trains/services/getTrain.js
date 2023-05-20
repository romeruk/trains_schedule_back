'use strict';

const { TrainRepository } = require('../repository');

const getTrain = async ({ fastify, trainId }) => {
  const { TrainRepo } = TrainRepository;
  const { getTrain: getTrainRepo } = TrainRepo(fastify);

  const train = await getTrainRepo(fastify.knex)({
    trainId
  });

  return train;
};

module.exports = getTrain;
