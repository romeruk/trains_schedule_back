'use strict';

const { TrainRoutesRepository } = require('../repository');

const deleteRoute = async ({ fastify, routeId }) => {
  const { TrainRoutesRepo } = TrainRoutesRepository;
  const { deleteRoute } = TrainRoutesRepo(fastify);
  const data = deleteRoute(fastify.knex)({
    routeId
  });
  return data;
};

module.exports = deleteRoute;
