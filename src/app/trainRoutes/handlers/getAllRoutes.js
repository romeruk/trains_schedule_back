/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getAllRoutes: getAllRoutesService } = require('../services');

const getAllRoutes = fastify => async (request, reply) => {
  const { pageSize, currentPage } = request.query;

  const paginateData = {};

  if (pageSize) {
    paginateData['pageSize'] = pageSize;
  }

  if (currentPage) {
    paginateData['currentPage'] = currentPage;
  }

  const data = await getAllRoutesService({ fastify, paginateData });

  return reply.code(OK).send(data);
};

module.exports = getAllRoutes;
