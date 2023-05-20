'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const updateStationResponseSchema = {
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

const updateStationRequestSchema = {
  tags: ['Stations'],
  summary: 'This api update a station',
  description: `<h3> This API let users to update a station </h3>`,
  headers,
  body: {
    title: 'Update station body',
    type: 'object',
    required: ['station_title'],
    properties: {
      station_title: { type: 'string', minLength: 1 }
    }
  },
  params: {
    title: 'Update station params',
    type: 'object',
    required: ['stationId'],
    properties: {
      stationId: { type: 'string', format: 'uuid' }
    }
  }
};

const updateStationSchema = {
  ...updateStationRequestSchema,
  response: {
    200: updateStationResponseSchema,
    ...errorSchemas
  }
};

module.exports = { updateStationSchema };
