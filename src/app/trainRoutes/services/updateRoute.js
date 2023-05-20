'use strict';

const { TrainRoutesRepository } = require('../repository');

const updateRoute = async ({ fastify, body, routeId }) => {
  const { TrainRoutesRepo } = TrainRoutesRepository;
  const { updateRoute } = TrainRoutesRepo(fastify);
  const data = updateRoute(fastify.knex)({
    body,
    routeId
  });
  return data;
};

module.exports = updateRoute;
