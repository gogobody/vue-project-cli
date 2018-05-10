'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://10.10.0.28:28888/"',
  REDIRECT_URI: '"http://www.meitianiot.com/testServers/unlicensedCar/index.html"'
})
