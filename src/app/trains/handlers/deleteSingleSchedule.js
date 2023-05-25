/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { deleteSingleSchedule: deleteSingleScheduleService } = require('../services');
const errors = require('../../../errors/domain/errors');

const deleteSingleSchedule = fastify => async (request, reply) => {
  const { trainId, routeId, stationId } = request.params;

  const train = await deleteSingleScheduleService({
    fastify,
    trainId,
    routeId,
    stationId
  });

  if (!train) {
    return errors.TrainNotFound();
  }

  return reply.code(OK).send(train);
};

module.exports = deleteSingleSchedule;
