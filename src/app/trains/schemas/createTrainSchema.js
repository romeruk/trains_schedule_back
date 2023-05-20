'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createTrainResponseSchema = {
  type: 'object',
  properties: {
    train_id: {
      type: 'string',
      format: 'uuid'
    },
    train_no: {
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
};

const createTrainRequestSchema = {
  tags: ['Trains'],
  summary: 'This api creates a train',
  description: `<h3> This API let users to add a train </h3>`,
  headers,
  body: {
    title: 'Create a train',
    type: 'object',
    required: ['train_no'],
    properties: {
      train_no: { type: 'string', minLength: 1 },
      route_id: { type: 'string', format: 'uuid' }
    }
  }
};

const createTrainSchema = {
  ...createTrainRequestSchema,
  response: {
    200: createTrainResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createTrainSchema };
