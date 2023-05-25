'use strict';

const { BoardRepository } = require('../repository');

const getBoardData = async ({ fastify, departureStation, arrivalStation, departureDate }) => {
  const { BoardRepo } = BoardRepository;
  const { getBoardData: getBoardDataRepo } = BoardRepo(fastify);

  const data = await getBoardDataRepo(fastify.knex)({
    departureStation,
    arrivalStation,
    departureDate
  });

  return data;
};

module.exports = getBoardData;
