'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getTrainStationsResponseSchema = {
  type: 'object',
  properties: {
    train_no: {
      type: 'string'
    },
    stations: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          station_title: {
            type: 'string'
          },
          arrival_time: {
            type: 'string',
            format: 'date-time'
          },
          departure_time: {
            type: 'string',
            format: 'date-time'
          },
          station_id: {
            type: 'string',
            format: 'uuid'
          }
        }
      }
    }
  }
};

const getTrainStationsRequestSchema = {
  tags: ['Trains'],
  summary: 'This api return a train stations',
  description: `<h3> This API let users to return train stations </h3>`,
  headers,
  params: {
    title: 'Get train stations',
    type: 'object',
    required: ['trainId'],
    properties: {
      trainId: { type: 'string', format: 'uuid' }
    }
  }
};

const getTrainStationsSchema = {
  ...getTrainStationsRequestSchema,
  response: {
    200: getTrainStationsResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getTrainStationsSchema };
