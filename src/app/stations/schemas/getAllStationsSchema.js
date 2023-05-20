'use strict';

const { headers, errorSchemas } = require('../../common/schema');

const getStationsResponseSchema = {
  type: 'object',
  properties: {
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          station_id: {
            type: 'string',
            format: 'uuid'
          },
          station_title: {
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
    },
    meta: {
      type: 'object',
      properties: {
        pagination: {
          type: 'object',
          properties: {
            total: { type: 'number' },
            page: { type: 'number' },
            page_size: { type: 'number' },
            total_pages: { type: 'number' }
          }
        }
      },
      additionalProperties: true
    }
  }
};

const getStationsRequestSchema = {
  tags: ['Stations'],
  summary: 'This api get all stations',
  description: `<h3> This API let users to get all stations </h3>`,
  headers,
  query: {
    title: 'get all stations',
    type: 'object',
    required: [],
    properties: {
      currentPage: { type: 'number', minimum: 1 },
      pageSize: { type: 'number', minimum: 1 }
    }
  }
};

const getAllStationsSchema = {
  ...getStationsRequestSchema,
  response: {
    200: getStationsResponseSchema,
    ...errorSchemas
  }
};

module.exports = { getAllStationsSchema };
