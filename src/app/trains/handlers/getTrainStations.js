/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { getTrainStations: getTrainStationsService } = require('../services');
const errors = require('../../../errors/domain/errors');

const getTrainStations = fastify => async (request, reply) => {
  const { trainId } = request.params;

  const train = await getTrainStationsService({
    fastify,
    trainId
  });

  if (!train) {
    return errors.TrainNotFound();
  }

  return reply.code(OK).send(train);
};

module.exports = getTrainStations;
