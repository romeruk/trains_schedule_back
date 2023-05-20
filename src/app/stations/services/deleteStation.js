'use strict';

const { StationRepository } = require('../repository');

const deleteStation = async ({ fastify, stationId }) => {
  const { StationRepo } = StationRepository;
  const { deleteStation } = StationRepo(fastify);
  const deletedStation = deleteStation(fastify.knex)({
    stationId
  });
  return deletedStation;
};

module.exports = deleteStation;
