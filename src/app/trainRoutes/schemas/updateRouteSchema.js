'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const updateRouteResponseSchema = {
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

const updateRouteRequestSchema = {
  tags: ['Routes'],
  summary: 'This api update a route',
  description: `<h3> This API let users to update a route </h3>`,
  headers,
  body: {
    title: 'Update route body',
    type: 'object',
    required: ['route_title'],
    properties: {
      route_title: { type: 'string', minLength: 1 }
    }
  },
  params: {
    title: 'Update route params',
    type: 'object',
    required: ['routeId'],
    properties: {
      routeId: { type: 'string', format: 'uuid' }
    }
  }
};

const updateRouteSchema = {
  ...updateRouteRequestSchema,
  response: {
    200: updateRouteResponseSchema,
    ...errorSchemas
  }
};

module.exports = { updateRouteSchema };
