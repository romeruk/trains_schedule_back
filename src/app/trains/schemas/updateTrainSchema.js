'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const updateTrainResponseSchema = {
  type: 'object',
  properties: {
    train_id: {
      type: 'string',
      format: 'uuid'
    },
    train_title: {
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

const updateTrainRequestSchema = {
  tags: ['Trains'],
  summary: 'This api updates a train',
  description: `<h3> This API let users to update a train </h3>`,
  headers,
  body: {
    title: 'Update a train body',
    type: 'object',
    required: ['train_no'],
    properties: {
      train_no: { type: 'string', minLength: 1 },
      route_id: { type: 'string', format: 'uuid' }
    }
  },
  params: {
    title: 'Update a train params',
    type: 'object',
    required: ['trainId'],
    properties: {
      trainId: { type: 'string', format: 'uuid' }
    }
  }
};

const updateTrainSchema = {
  ...updateTrainRequestSchema,
  response: {
    200: updateTrainResponseSchema,
    ...errorSchemas
  }
};

module.exports = { updateTrainSchema };
