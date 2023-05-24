/* eslint-disable camelcase */
'use strict';

const { TrainRepository } = require('../repository');

const getTrainStations = async ({ fastify, trainId, routeId }) => {
  const { TrainRepo } = TrainRepository;
  const { getTrainStations: getTrainStationsRepo } = TrainRepo(fastify);
  const rows = await getTrainStationsRepo(fastify.knex)({
    trainId,
    routeId
  });

  return rows;
};

module.exports = getTrainStations;
