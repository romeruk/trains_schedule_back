'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createTrainResponseSchema = {
  type: 'object',
  properties: {
    train_id: {
      type: 'string',
      format: 'uuid'
    }
  }
};

const createTrainScheduleRequestSchema = {
  tags: ['Trains'],
  summary: 'This api creates a train',
  description: `<h3> This API let users to add a train </h3>`,
  headers,
  body: {
    title: 'Create a train',
    type: 'object',
    required: ['schedule'],
    properties: {
      schedule: {
        type: 'array',
        items: {
          type: 'object',
          required: ['station_id', 'schedule_order'],
          properties: {
            station_id: { type: 'string', format: 'uuid' },
            schedule_order: { type: 'number', minimum: 1 }
            // departure_time: { type: 'string', format: 'date-time' },
            // arrival_time: { type: 'string', format: 'date-time' }
          }
        }
        // minItems: 2
      }
    }
  }
};

const createTrainScheduleSchema = {
  ...createTrainScheduleRequestSchema,
  response: {
    200: createTrainResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createTrainScheduleSchema };
