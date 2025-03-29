const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

function configExpress(app) {
  app.use(cors());
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  });
  app.use(express.json());
  app.use(morgan('dev'));
}

module.exports = configExpress;
