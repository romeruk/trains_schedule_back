'use strict';

const { TrainRepository } = require('../repository');

const getLastScheduleRecord = async ({ fastify, trainId, routeId }) => {
  const { TrainRepo } = TrainRepository;
  const { getLastScheduleRecord: getLastScheduleRecordRepo } = TrainRepo(fastify);

  const schedule = await getLastScheduleRecordRepo(fastify.knex)({
    trainId,
    routeId
  });

  return schedule;
};

module.exports = getLastScheduleRecord;
