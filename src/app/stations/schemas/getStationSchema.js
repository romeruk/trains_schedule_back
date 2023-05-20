'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getStationResponseSchema = {
  type: 'object',
  properties: {
    station_id: {
      type: 'string',
      format: 'uuid'
    },
    station_title: {
      type: 'string'
    },
    created_at: {
      type: 'string',
      format: 'date-time'
    },
    updated_at: {
      type: 'string',
      format: 'date-time'
    }
  }
};

const getStationRequestSchema = {
  tags: ['Stations'],
  summary: 'This api get a station',
  description: `<h3> This API let users to get a station </h3>`,
  headers,
  params: {
    title: 'get a station',
    type: 'object',
    required: ['stationId'],
    properties: {
      stationId: { type: 'string', format: 'uuid' }
    }
  }
};

const getStationSchema = {
  ...getStationRequestSchema,
  response: {
    200: getStationResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getStationSchema };
