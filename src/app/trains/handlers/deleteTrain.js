/* eslint-disable camelcase */
'use strict';
const { OK } = require('http-status-codes').StatusCodes;

const { deleteTrain: deleteTrainService } = require('../services');
const errors = require('../../../errors/domain/errors');

const deleteTrain = fastify => async (request, reply) => {
  const { trainId } = request.params;

  const train = await deleteTrainService({
    fastify,
    trainId
  });

  if (!train) {
    return errors.TrainNotFound();
  }

  return reply.code(OK).send(train);
};

module.exports = deleteTrain;
