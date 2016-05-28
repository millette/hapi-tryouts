'use strict'

exports.register = require('../lib/utils').routePlugin(
  require('path').basename(__filename, '.js'),
  [
    {
      method: 'GET',
      path: '/test',
      handler: (request, reply) => {
        reply('test passed')
      }
    },
    {
      method: 'GET',
      path: '/templated',
      handler: {
        view: {
          template: 'le-tpl',
          context: { cnt: 'test passed' }
        }
      }
    }
  ]
)
