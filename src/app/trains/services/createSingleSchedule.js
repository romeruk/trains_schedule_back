('use strict');

const { TrainRepository } = require('../repository');

const createSingleSchedule = async ({ fastify, body }) => {
  const { TrainRepo } = TrainRepository;
  const { createSingleSchedule } = TrainRepo(fastify);
  const schedule = createSingleSchedule(fastify.knex)({
    body
  });
  return schedule;
};

module.exports = createSingleSchedule;
