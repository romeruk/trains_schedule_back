/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { deleteStation: deleteStationService } = require('../services');
const errors = require('../../../errors/domain/errors');

const deleteStation = fastify => async (request, reply) => {
  const { stationId } = request.params;

  const station = await deleteStationService({ fastify, stationId });

  if (!station) {
    return errors.StationNotFound();
  }

  return reply.code(OK).send(station);
};

module.exports = deleteStation;
