'use strict';

const { createTrainSchema } = require('./createTrainSchema');
const { getTrainStationsSchema } = require('./getTrainStationsSchema');
const { deleteTrainSchema } = require('./deleteTrainSchema');
const { updateTrainSchema } = require('./updateTrainSchema');
const { getAllTrainsSchema } = require('./getAllTrainsSchema');
const { createTrainScheduleSchema } = require('./createTrainScheduleSchema');
const { deleteSingleScheduleSchema } = require('./deleteSingleScheduleSchema');
const { createSingleScheduleSchema } = require('./createSingleScheduleSchema');

module.exports = {
  createTrainSchema,
  getTrainStationsSchema,
  deleteTrainSchema,
  updateTrainSchema,
  getAllTrainsSchema,
  createTrainScheduleSchema,
  deleteSingleScheduleSchema,
  createSingleScheduleSchema
};
