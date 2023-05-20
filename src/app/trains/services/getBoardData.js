'use strict';

const { TrainRepository } = require('../repository');

const getBoardData = async ({ fastify, departureStation, arrivalStation, departureDate }) => {
  const { TrainRepo } = TrainRepository;
  const { getBoardData: getBoardDataRepo } = TrainRepo(fastify);

  const data = await getBoardDataRepo(fastify.knex)({
    departureStation,
    arrivalStation,
    departureDate
  });

  return data;
};

module.exports = getBoardData;
