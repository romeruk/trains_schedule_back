'use strict';

const {
  createStationSchema,
  deleteStationSchema,
  getStationSchema,
  getAllStationsSchema,
  updateStationSchema
} = require('../schemas');
const {
  createStation,
  deleteStation,
  getStation,
  getAllStations,
  updateStation
} = require('../handlers');

module.exports = async fastify => {
  fastify.route({
    method: 'POST',
    url: '/',
    schema: createStationSchema,
    handler: createStation(fastify)
  }),
    fastify.route({
      method: 'GET',
      url: '/',
      schema: getAllStationsSchema,
      handler: getAllStations(fastify)
    }),
    fastify.route({
      method: 'DELETE',
      url: '/:stationId',
      schema: deleteStationSchema,
      handler: deleteStation(fastify)
    }),
    fastify.route({
      method: 'GET',
      url: '/:stationId',
      schema: getStationSchema,
      handler: getStation(fastify)
    }),
    fastify.route({
      method: 'PUT',
      url: '/:stationId',
      schema: updateStationSchema,
      handler: updateStation(fastify)
    });
};
