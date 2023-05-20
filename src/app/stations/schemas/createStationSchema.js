'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createStationResponseSchema = {
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

const createStationRequestSchema = {
  tags: ['Stations'],
  summary: 'This api creates a station',
  description: `<h3> This API let users to add a station </h3>`,
  headers,
  body: {
    title: 'Create a station',
    type: 'object',
    required: ['station_title'],
    properties: {
      station_title: { type: 'string', minLength: 1 }
    }
  }
};

const createStationSchema = {
  ...createStationRequestSchema,
  response: {
    200: createStationResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createStationSchema };
