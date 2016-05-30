'use strict'

exports.register = require('../lib/utils').routePlugin(
  'home',
  [{
    method: 'GET',
    path: '/',
    handler: { view: { template: 'home' } }
  }]
)
