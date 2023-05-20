/* eslint-disable no-console */
'use strict';
const { CREATED } = require('http-status-codes').StatusCodes;
const { isCorrectOrder, isCorrectScheduleTimes } = require('../../common/helpers');
const { createTrainSchedule: createTrainScheduleService } = require('../services');
const errors = require('../../../errors/domain/errors');

const createTrainSchedule = fastify => async (request, reply) => {
  const { trainId, routeId } = request.params;
  const { schedule } = request.body;

  const sortedSchedule = schedule.sort((a, b) => {
    return a.schedule_order - b.schedule_order;
  });

  const orderArray = sortedSchedule.map(s => s.schedule_order);

  const correctOrder = isCorrectOrder(orderArray);

  if (!correctOrder) {
    return errors.InvalidScheduleOrder();
  }

  const correctScheduleTimes = isCorrectScheduleTimes(sortedSchedule);

  if (!correctScheduleTimes) {
    return errors.InvalidScheduleTime();
  }

  const body = sortedSchedule.map(sh => ({ train_id: trainId, route_id: routeId, ...sh }));

  const data = await createTrainScheduleService({ fastify, body, trainId, routeId });

  return reply.code(CREATED).send(data);
};

module.exports = createTrainSchedule;
