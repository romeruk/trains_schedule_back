/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getAllStations: getStationsService } = require('../services');

const getAllStations = fastify => async (request, reply) => {
  const { pageSize, currentPage } = request.query;

  const paginateData = {};

  if (pageSize) {
    paginateData['pageSize'] = pageSize;
  }

  if (currentPage) {
    paginateData['currentPage'] = currentPage;
  }

  const rows = await getStationsService({ fastify, paginateData });

  return reply.code(OK).send(rows);
};

module.exports = getAllStations;
