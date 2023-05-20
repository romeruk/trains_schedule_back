'use strict';
const { randomUUID: uuidV4 } = require('crypto');
const logger = require('./logger');
const serializers = require('./serializers');
const redactor = require('./redactor');

module.exports = {
  uuidV4,
  ...logger,
  ...redactor,
  ...serializers
};
