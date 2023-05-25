'use strict';

const {
  createTrainSchema,
  getTrainStationsSchema,
  deleteTrainSchema,
  getAllTrainsSchema,
  updateTrainSchema,
  createTrainScheduleSchema,
  deleteSingleScheduleSchema,
  createSingleScheduleSchema
} = require('../schemas/index');

const {
  createTrain,
  getTrain,
  getTrainStations,
  deleteTrain,
  updateTrain,
  getAllTrains,
  createTrainSchedule,
  createSingleSchedule,
  deleteSingleSchedule
} = require('../handlers');

module.exports = async fastify => {
  fastify.route({
    method: 'POST',
    url: '/',
    schema: createTrainSchema,
    handler: createTrain(fastify)
  }),
    fastify.route({
      method: 'GET',
      url: '/:trainId',
      // schema: getAllTrainsSchema,
      handler: getTrain(fastify)
    }),
    fastify.route({
      method: 'DELETE',
      url: '/:trainId',
      schema: deleteTrainSchema,
      handler: deleteTrain(fastify)
    }),
    fastify.route({
      method: 'PATCH',
      url: '/:trainId',
      schema: updateTrainSchema,
      handler: updateTrain(fastify)
    }),
    fastify.route({
      method: 'GET',
      url: '/',
      schema: getAllTrainsSchema,
      handler: getAllTrains(fastify)
    }),
    fastify.route({
      method: 'GET',
      url: '/:trainId/route/:routeId/schedule',
      schema: getTrainStationsSchema,
      handler: getTrainStations(fastify)
    }),
    fastify.route({
      method: 'POST',
      url: '/:trainId/route/:routeId/schedule',
      schema: createSingleScheduleSchema,
      handler: createSingleSchedule(fastify)
    }),
    fastify.route({
      method: 'DELETE',
      url: '/:trainId/route/:routeId/station/:stationId',
      schema: deleteSingleScheduleSchema,
      handler: deleteSingleSchedule(fastify)
    }),
    fastify.route({
      method: 'PUT',
      url: '/:trainId/route/:routeId/schedule',
      schema: createTrainScheduleSchema,
      handler: createTrainSchedule(fastify)
    });
};
