'use strict';

const createTrain = require('./createTrain');
const getTrainStations = require('./getTrainStations');
const deleteTrain = require('./deleteTrain');
const updateTrain = require('./updateTrain');
const getAllTrains = require('./getAllTrains');
const createTrainSchedule = require('./createTrainSchedule');
const getTrain = require('./getTrain');
const getBoardData = require('./getBoardData');

module.exports = {
  createTrain,
  getTrain,
  getTrainStations,
  deleteTrain,
  updateTrain,
  getAllTrains,
  createTrainSchedule,
  getBoardData
};
