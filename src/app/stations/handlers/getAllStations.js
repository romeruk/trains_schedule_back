/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getAllStations: getStationsService } = require('../services');

const getAllStations = fastify => async (request, reply) => {
  const { _end, _start } = request.query;

  const paginateData = {};

  if (_end) {
    paginateData['limit'] = _end;
  }

  if (_start) {
    paginateData['skip'] = _start;
  }

  const rows = await getStationsService({ fastify, paginateData });

  reply.header('x-total-count', rows.total);
  reply.header('Access-Control-Expose-Headers', 'x-total-count');
  return reply.code(OK).send(rows.data);
};

module.exports = getAllStations;
