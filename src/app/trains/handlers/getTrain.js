/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { getTrain: getTrainService } = require('../services');
const errors = require('../../../errors/domain/errors');

const getTrain = fastify => async (request, reply) => {
  const { trainId } = request.params;

  const train = await getTrainService({
    fastify,
    trainId
  });

  if (!train) {
    return errors.TrainNotFound();
  }

  return reply.code(OK).send(train);
};

module.exports = getTrain;
