'use strict';

const { StationRepository } = require('../repository');

const getAllStations = async ({ fastify, paginateData }) => {
  const { StationRepo } = StationRepository;
  const { getAllStations } = StationRepo(fastify);
  const stations = getAllStations(fastify.knex)({
    paginateData
  });
  return stations;
};

module.exports = getAllStations;
