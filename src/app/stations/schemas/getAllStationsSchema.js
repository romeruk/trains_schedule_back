'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getStationsResponseSchema = {
  type: 'array',
  items: {
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
  }
};

const getStationsRequestSchema = {
  tags: ['Stations'],
  summary: 'This api get all stations',
  description: `<h3> This API let users to get all stations </h3>`,
  headers,
  query: {
    title: 'get all stations',
    type: 'object',
    required: [],
    properties: {
      _start: { type: 'number', minimum: 0 },
      _end: { type: 'number', minimum: 1 }
    }
  }
};

const getAllStationsSchema = {
  ...getStationsRequestSchema,
  response: {
    200: getStationsResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getAllStationsSchema };
