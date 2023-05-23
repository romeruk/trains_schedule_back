'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getAllRoutesResponseSchema = {
  type: 'array',
  items: {
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
  }
};

const getAllRoutesRequestSchema = {
  tags: ['Routes'],
  summary: 'This api get all Routes',
  description: `<h3> This API let users to get all Routes </h3>`,
  headers,
  query: {
    title: 'get all Routes',
    type: 'object',
    required: [],
    properties: {
      currentPage: { type: 'number', minimum: 1 },
      pageSize: { type: 'number', minimum: 1 }
    }
  }
};

const getAllRoutesSchema = {
  ...getAllRoutesRequestSchema,
  response: {
    200: getAllRoutesResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getAllRoutesSchema };
