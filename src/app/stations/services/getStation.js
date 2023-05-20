'use strict';

const { StationRepository } = require('../repository');

const getStation = async ({ fastify, stationId }) => {
  const { StationRepo } = StationRepository;
  const { getStation } = StationRepo(fastify);
  const station = getStation(fastify.knex)({
    stationId
  });
  return station;
};

module.exports = getStation;
