'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const deleteRouteResponseSchema = {
  type: 'object',
  properties: {
    route_id: {
      type: 'string',
      format: 'uuid'
    },
    route_title: {
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

const deleteRouteRequestSchema = {
  tags: ['Routes'],
  summary: 'This api delete a route',
  description: `<h3> This API let users to delete a route </h3>`,
  headers,
  params: {
    title: 'Delete a route',
    type: 'object',
    required: ['routeId'],
    properties: {
      routeId: { type: 'string', format: 'uuid' }
    }
  }
};

const deleteRouteSchema = {
  ...deleteRouteRequestSchema,
  response: {
    200: deleteRouteResponseSchema,
    ...errorSchemas
  }
};

module.exports = { deleteRouteSchema };
