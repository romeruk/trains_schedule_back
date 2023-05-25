'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const deleteSingleScheduleResponseSchema = {
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
    schedule_id: {
      type: 'string',
      format: 'uuid'
    }
  }
};

const deleteSingleScheduleRequestSchema = {
  tags: ['Trains'],
  summary: 'This api delete a train schedule',
  description: `<h3> This API let users to delete a train schedule</h3>`,
  headers,
  params: {
    title: 'delete a train schedule',
    type: 'object',
    required: ['trainId', 'routeId', 'stationId'],
    properties: {
      trainId: { type: 'string', format: 'uuid' },
      routeId: { type: 'string', format: 'uuid' },
      stationId: { type: 'string', format: 'uuid' }
    }
  }
};

const deleteSingleScheduleSchema = {
  ...deleteSingleScheduleRequestSchema,
  response: {
    200: deleteSingleScheduleResponseSchema,
    ...errorSchemas
  }
};

module.exports = { deleteSingleScheduleSchema };
