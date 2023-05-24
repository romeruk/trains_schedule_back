'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getAllTrainsResponseSchema = {
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
      route_title: {
        type: 'string'
      },
      route_id: {
        type: 'string',
        format: 'uuid'
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

const getAllTrainsRequestSchema = {
  tags: ['Trains'],
  summary: 'This api get all trains',
  description: `<h3> This API let users to get all trains </h3>`,
  headers,
  query: {
    title: 'get all trains',
    type: 'object',
    required: [],
    properties: {
      _start: { type: 'number', minimum: 0 },
      _end: { type: 'number', minimum: 1 }
    }
  }
};

const getAllTrainsSchema = {
  ...getAllTrainsRequestSchema,
  response: {
    200: getAllTrainsResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getAllTrainsSchema };
