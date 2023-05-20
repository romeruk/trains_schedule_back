/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { getStation: getStationService } = require('../services');
const errors = require('../../../errors/domain/errors');

const getStation = fastify => async (request, reply) => {
  const { stationId } = request.params;

  const station = await getStationService({ fastify, stationId });

  if (!station) {
    return errors.StationNotFound();
  }

  return reply.code(OK).send(station);
};

module.exports = getStation;
