'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createSingleScheduleResponseSchema = {
  type: 'object',
  properties: {
    train_id: {
      type: 'string',
      format: 'uuid'
    },
    route_id: {
      type: 'string',
      format: 'uuid'
    },
    station_id: {
      type: 'string',
      format: 'uuid'
    },
    departure_time: {
      type: 'string',
      format: 'date-time'
    },
    arrival_time: {
      type: 'string',
      format: 'date-time'
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

const createSingleScheduleRequestSchema = {
  tags: ['Trains'],
  summary: 'This api create a single schedule',
  description: `<h3> This API let users to create a train schedule </h3>`,
  headers,
  body: {
    title: 'Single train schedule',
    type: 'object',
    required: ['station_id', 'departure_time', 'arrival_time'],
    properties: {
      station_id: { type: 'string', format: 'uuid' },
      departure_time: { type: 'string', format: 'date-time' },
      arrival_time: { type: 'string', format: 'date-time' }
    }
  },
  params: {
    title: 'Update a train params',
    type: 'object',
    required: ['trainId', 'routeId'],
    properties: {
      trainId: { type: 'string', format: 'uuid' },
      routeId: { type: 'string', format: 'uuid' }
    }
  }
};

const createSingleScheduleSchema = {
  ...createSingleScheduleRequestSchema,
  response: {
    200: createSingleScheduleResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createSingleScheduleSchema };
