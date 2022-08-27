'use strict';

const {listener} = require('./server');

listener(process.env.PORT || 3001)