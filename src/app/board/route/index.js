'use strict';

const { getBoardData } = require('../handlers');
const { getBoardDataSchema } = require('../schemas');

module.exports = async fastify => {
  fastify.route({
    method: 'GET',
    url: '/',
    // schema: getBoardDataSchema,
    handler: getBoardData(fastify)
  });
};
