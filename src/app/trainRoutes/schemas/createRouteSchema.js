'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const createRouteResponseSchema = {
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

const createRouteRequestSchema = {
  tags: ['Routes'],
  summary: 'This api creates a route',
  description: `<h3> This API let users to add a route </h3>`,
  headers,
  body: {
    title: 'Create a route',
    type: 'object',
    required: ['route_title'],
    properties: {
      route_title: { type: 'string', minLength: 1 }
    }
  }
};

const createRouteSchema = {
  ...createRouteRequestSchema,
  response: {
    200: createRouteResponseSchema,
    ...errorSchemas
  }
};

module.exports = { createRouteSchema };
