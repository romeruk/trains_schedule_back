/* eslint-disable camelcase */
'use strict';

const { TrainRepository } = require('../repository');

const getTrainStations = async ({ fastify, trainId }) => {
  const { TrainRepo } = TrainRepository;
  const { getTrainStations: getTrainStationsRepo } = TrainRepo(fastify);
  const rows = await getTrainStationsRepo(fastify.knex)({
    trainId
  });

  const result = {
    train_no: '',
    stations: []
  };

  for (const row of rows) {
    const { train_no, ...rest } = row;
    result.train_no = train_no;
    result.stations.push(rest);
  }

  return result;
};

module.exports = getTrainStations;
