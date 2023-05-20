'use strict';

const { createStationSchema } = require('./createStationSchema');
const { deleteStationSchema } = require('./deleteStationSchema');
const { getStationSchema } = require('./getStationSchema');
const { getAllStationsSchema } = require('./getAllStationsSchema');
const { updateStationSchema } = require('./updateStationSchema');

module.exports = {
  createStationSchema,
  deleteStationSchema,
  getStationSchema,
  getAllStationsSchema,
  updateStationSchema
};
