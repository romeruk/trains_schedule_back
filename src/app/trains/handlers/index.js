'use strict';

const createTrain = require('./createTrain');
const getTrain = require('./getTrain');
const getTrainStations = require('./getTrainStations');
const deleteTrain = require('./deleteTrain');
const updateTrain = require('./updateTrain');
const getAllTrains = require('./getAllTrains');
const createTrainSchedule = require('./createTrainSchedule');
const getBoardData = require('./getBoardData');

module.exports = {
  createTrain,
  getTrainStations,
  deleteTrain,
  updateTrain,
  getAllTrains,
  createTrainSchedule,
  getTrain,
  getBoardData
};
