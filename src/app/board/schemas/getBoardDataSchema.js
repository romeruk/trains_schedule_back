'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getBoardDataResponseSchema = {
  type: 'object',
  properties: {
    data: {
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
    }
  }
};

const getBoardDataRequestSchema = {
  tags: ['Trains'],
  summary: 'This api get all trains',
  description: `<h3> This API let users to get all trains </h3>`,
  headers,
  query: {
    title: 'get all trains',
    type: 'object',
    properties: {
      departureStation: { type: 'string', format: 'uuid' },
      arrivalStation: { type: 'string', format: 'uuid' },
      departureDate: { type: 'string', format: 'date-time' }
    },
    dependencies: {
      departureStation: {
        if: { properties: { departureStation: { type: 'string', format: 'uuid' } } },
        then: { required: ['arrivalStation'] }
      }
    }
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
