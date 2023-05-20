/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { updateTrain: updateTrainService } = require('../services');
const errors = require('../../../errors/domain/errors');

const updateTrain = fastify => async (request, reply) => {
  const { trainId } = request.params;
  const { body } = request;

  const train = await updateTrainService({
    fastify,
    trainId,
    body
  });

  if (!train) {
    return errors.TrainNotFound();
  }

  return reply.code(OK).send(train);
};

module.exports = updateTrain;
