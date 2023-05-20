'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const deleteTrainResponseSchema = {
  type: 'object',
  properties: {
    train_id: {
      type: 'string',
      format: 'uuid'
    },
    train_no: {
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

const deleteTrainRequestSchema = {
  tags: ['Trains'],
  summary: 'This api delete a train',
  description: `<h3> This API let users to delete a train </h3>`,
  headers,
  params: {
    title: 'delete a train',
    type: 'object',
    required: ['trainId'],
    properties: {
      trainId: { type: 'string', format: 'uuid' }
    }
  }
};

const deleteTrainSchema = {
  ...deleteTrainRequestSchema,
  response: {
    200: deleteTrainResponseSchema,
    ...errorSchemas
  }
};

module.exports = { deleteTrainSchema };
