'use strict';

const { TrainRoutesRepository } = require('../repository');

const getAllRoutes = async ({ fastify, paginateData }) => {
  const { TrainRoutesRepo } = TrainRoutesRepository;
  const { getAllRoutes } = TrainRoutesRepo(fastify);
  const data = getAllRoutes(fastify.knex)({
    paginateData
  });
  return data;
};

module.exports = getAllRoutes;
