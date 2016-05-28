'use strict'

exports.register = require('../lib/utils').routePlugin(
  require('path').basename(__filename, '.js'),
  [
    {
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('Hello, world')
      }
    }
  ]
)
