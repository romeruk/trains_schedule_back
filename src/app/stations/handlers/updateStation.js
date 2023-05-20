/* eslint-disable no-console */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;
const { updateStation: updateStationService } = require('../services');
const errors = require('../../../errors/domain/errors');

const updateStation = fastify => async (request, reply) => {
  const { stationId } = request.params;
  const { body } = request;
  const station = await updateStationService({ fastify, stationId, body });

  if (!station) {
    return errors.StationNotFound();
  }

  return reply.code(OK).send(station);
};

module.exports = updateStation;
