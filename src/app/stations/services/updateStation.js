'use strict';

const { StationRepository } = require('../repository');

const updateStation = async ({ fastify, stationId, body }) => {
  const { StationRepo } = StationRepository;
  const { updateStation } = StationRepo(fastify);
  const station = updateStation(fastify.knex)({
    stationId,
    body
  });
  return station;
};

module.exports = updateStation;
