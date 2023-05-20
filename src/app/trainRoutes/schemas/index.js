'use strict';

const { createRouteSchema } = require('./createRouteSchema');
const { deleteRouteSchema } = require('./deleteRouteSchema');
const { updateRouteSchema } = require('./updateRouteSchema');
const { getAllRoutesSchema } = require('./getAllRoutesSchema');

module.exports = {
  createRouteSchema,
  deleteRouteSchema,
  updateRouteSchema,
  getAllRoutesSchema
};
