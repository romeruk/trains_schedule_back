/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getAllTrains: getAllTrainsService } = require('../services');

const getAllTrains = fastify => async (request, reply) => {
  const { pageSize, currentPage } = request.query;

  const paginateData = {};

  if (pageSize) {
    paginateData['pageSize'] = pageSize;
  }

  if (currentPage) {
    paginateData['currentPage'] = currentPage;
  }

  const data = await getAllTrainsService({ fastify, paginateData });

  return reply.code(OK).send(data);
};

module.exports = getAllTrains;
