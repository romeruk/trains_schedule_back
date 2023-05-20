'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const deleteStationResponseSchema = {
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

const deleteStationRequestSchema = {
  tags: ['Stations'],
  summary: 'This api delete a station',
  description: `<h3> This API let users to delete a station </h3>`,
  headers,
  params: {
    title: 'delete a station',
    type: 'object',
    required: ['stationId'],
    properties: {
      stationId: { type: 'string', format: 'uuid' }
    }
  }
};

const deleteStationSchema = {
  ...deleteStationRequestSchema,
  response: {
    200: deleteStationResponseSchema,
    ...errorSchemas
  }
};

module.exports = { deleteStationSchema };
