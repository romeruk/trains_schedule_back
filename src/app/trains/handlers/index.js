'use strict';

const createTrain = require('./createTrain');
const getTrain = require('./getTrain');
const getTrainStations = require('./getTrainStations');
const deleteTrain = require('./deleteTrain');
const updateTrain = require('./updateTrain');
const getAllTrains = require('./getAllTrains');
const createTrainSchedule = require('./createTrainSchedule');
const createSingleSchedule = require('./createSingleSchedule');
const deleteSingleSchedule = require('./deleteSingleSchedule');

module.exports = {
  createTrain,
  getTrainStations,
  deleteTrain,
  updateTrain,
  getAllTrains,
  deleteSingleSchedule,
  createTrainSchedule,
  createSingleSchedule,
  getTrain
};
