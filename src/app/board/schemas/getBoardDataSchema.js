'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getBoardDataResponseSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      train_id: {
        type: 'string',
        format: 'uuid'
      },
      train_no: {
        type: 'string'
      },
      departure_time: {
        type: 'string',
        format: 'date-time'
      },
      arrival_time: {
        type: 'string',
        format: 'date-time'
      },
      departure_start_station: {
        type: 'string'
      },
      arrival_end_station: {
        type: 'string'
      }
    }
  }
};

const getBoardDataRequestSchema = {
  tags: ['Board'],
  summary: 'This api get board data',
  description: `<h3> This API let users to get board data </h3>`,
  headers,
  querystring: {
    title: 'get board data',
    type: 'object',
    properties: {
      departureStation: { type: 'string', format: 'uuid' },
      arrivalStation: { type: 'string', format: 'uuid' },
      departureDate: { type: 'string', format: 'date' }
    },
    anyOf: [
      {
        required: ['departureStation', 'arrivalStation', 'departureDate']
      },
      {
        required: [],
        propertyNames: { not: { enum: ['departureStation', 'arrivalStation', 'departureDate'] } }
      }
    ]
  }
};

const getBoardDataSchema = {
  ...getBoardDataRequestSchema,
  response: {
    200: getBoardDataResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getBoardDataSchema };
