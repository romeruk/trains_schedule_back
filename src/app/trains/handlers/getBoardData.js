/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { getBoardData: getBoardDataService } = require('../services');

const getBoardData = fastify => async (request, reply) => {
  const { departureStation, arrivalStation, departureDate } = request.query;

  const data = await getBoardDataService({
    fastify,
    departureStation,
    arrivalStation,
    departureDate
  });

  return reply.code(OK).send({ data });
};

module.exports = getBoardData;
