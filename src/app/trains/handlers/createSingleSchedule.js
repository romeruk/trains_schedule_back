'use strict';
const { CREATED } = require('http-status-codes').StatusCodes;
const {
  createSingleSchedule: createSingleScheduleService,
  getLastScheduleRecord
} = require('../services');

const { isCorrectScheduleTimes } = require('../../common/helpers');
const errors = require('../../../errors/domain/errors');

const createSingleSchedule = fastify => async (request, reply) => {
  const { trainId, routeId } = request.params;
  const { body } = request;

  const lastScheduleRecord = await getLastScheduleRecord({ fastify, trainId, routeId });

  const createBody = {
    train_id: trainId,
    route_id: routeId,
    ...body,
    schedule_order: lastScheduleRecord ? lastScheduleRecord.schedule_order + 1 : 1
  };

  const checkSchedule = [];

  if (lastScheduleRecord) {
    checkSchedule.push(lastScheduleRecord);
  }

  checkSchedule.push(createBody);

  const correctScheduleTimes = isCorrectScheduleTimes(checkSchedule);

  if (!correctScheduleTimes) {
    return errors.InvalidScheduleTime();
  }

  const schedule = await createSingleScheduleService({ fastify, body: createBody });

  return reply.code(CREATED).send(schedule);
};

module.exports = createSingleSchedule;
