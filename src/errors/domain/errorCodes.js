'use strict';

const HttpStatus = require('http-status-codes').StatusCodes;

module.exports = {
  TRAIN_NOT_FOUND: {
    name: 'TRAIN_NOT_FOUND',
    message: "Train Doesn't Exists IN System",
    explanation: '',
    httpStatusCode: HttpStatus.NOT_FOUND
  },
  STATION_NOT_FOUND: {
    name: 'STATION_NOT_FOUND',
    message: "Station Doesn't Exists IN System",
    explanation: 'wrong station id',
    httpStatusCode: HttpStatus.NOT_FOUND
  },
  ROUTE_NOT_FOUND: {
    name: 'ROUTE_NOT_FOUND',
    message: "Route Doesn't Exists IN System",
    explanation: 'wrong route id',
    httpStatusCode: HttpStatus.NOT_FOUND
  },
  INVALID_SCHEDULE_ORDER: {
    name: 'INVALID_SCHEDULE_ORDER',
    message: 'Invalid schedule order',
    explanation: 'wrong route id',
    httpStatusCode: HttpStatus.BAD_REQUEST
  },
  INVALID_SCHEDULE_TIME: {
    name: 'INVALID_SCHEDULE_TIME',
    message: 'Invalid schedule time',
    explanation: 'wrong route id',
    httpStatusCode: HttpStatus.BAD_REQUEST
  }
};
