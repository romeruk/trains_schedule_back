'use strict';

const { TrainRepository } = require('../repository');

const deleteSingleSchedule = async ({ fastify, trainId, routeId, stationId }) => {
  const { TrainRepo } = TrainRepository;
  const { deleteSingleSchedule: deleteSingleScheduleRepo } = TrainRepo(fastify);
  const deletedTrain = deleteSingleScheduleRepo(fastify.knex)({
    trainId,
    routeId,
    stationId
  });

  return deletedTrain;
};

module.exports = deleteSingleSchedule;
