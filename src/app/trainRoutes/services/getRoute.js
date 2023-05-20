'use strict';

const { TrainRoutesRepository } = require('../repository');

const getRoute = async ({ fastify, routeId }) => {
  const { TrainRoutesRepo } = TrainRoutesRepository;
  const { getRoute } = TrainRoutesRepo(fastify);
  const data = getRoute(fastify.knex)({
    routeId
  });
  return data;
};

module.exports = getRoute;
