'use strict';

const ErrorCodes = require('./errorCodes');
const CustomError = require('../CustomError');

module.exports = {
  TrainNotFound: error =>
    CustomError.create({
      httpCode: ErrorCodes.TRAIN_NOT_FOUND.httpStatusCode,
      message: ErrorCodes.TRAIN_NOT_FOUND.message,
      code: ErrorCodes.TRAIN_NOT_FOUND.name,
      error
    }),
  StationNotFound: error =>
    CustomError.create({
      httpCode: ErrorCodes.STATION_NOT_FOUND.httpStatusCode,
      message: ErrorCodes.STATION_NOT_FOUND.message,
      code: ErrorCodes.STATION_NOT_FOUND.name,
      error
    }),
  RouteNotFound: error =>
    CustomError.create({
      httpCode: ErrorCodes.ROUTE_NOT_FOUND.httpStatusCode,
      message: ErrorCodes.ROUTE_NOT_FOUND.message,
      code: ErrorCodes.ROUTE_NOT_FOUND.name,
      error
    }),
  InvalidScheduleOrder: error =>
    CustomError.create({
      httpCode: ErrorCodes.INVALID_SCHEDULE_ORDER.httpStatusCode,
      message: ErrorCodes.INVALID_SCHEDULE_ORDER.message,
      code: ErrorCodes.INVALID_SCHEDULE_ORDER.name,
      error
    }),
  InvalidScheduleTime: error =>
    CustomError.create({
      httpCode: ErrorCodes.INVALID_SCHEDULE_TIME.httpStatusCode,
      message: ErrorCodes.INVALID_SCHEDULE_TIME.message,
      code: ErrorCodes.INVALID_SCHEDULE_TIME.name,
      error
    })
};
