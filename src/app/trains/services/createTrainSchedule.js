'use strict';

const { TrainRepository } = require('../repository');

const createTrainSchedule = async ({ fastify, body, trainId, routeId }) => {
  const { TrainRepo } = TrainRepository;
  const { createTrainSchedule } = TrainRepo(fastify);
  const createdTrain = createTrainSchedule(fastify.knex)({
    body,
    trainId,
    routeId
  });
  return createdTrain;
};

module.exports = createTrainSchedule;
