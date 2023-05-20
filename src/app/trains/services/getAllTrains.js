/* eslint-disable camelcase */
'use strict';

const { TrainRepository } = require('../repository');

const getAllTrains = async ({ fastify, paginateData }) => {
  const { TrainRepo } = TrainRepository;
  const { getAllTrains: getTrainRepo } = TrainRepo(fastify);

  const data = await getTrainRepo(fastify.knex)({
    paginateData
  });

  return data;
};

module.exports = getAllTrains;
