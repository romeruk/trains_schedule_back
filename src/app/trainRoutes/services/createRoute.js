'use strict';

const { TrainRoutesRepository } = require('../repository');

const createRoute = async ({ fastify, body }) => {
  const { TrainRoutesRepo } = TrainRoutesRepository;
  const { createRoute } = TrainRoutesRepo(fastify);
  const data = createRoute(fastify.knex)({
    body
  });
  return data;
};

module.exports = createRoute;
