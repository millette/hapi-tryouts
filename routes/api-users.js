'use strict'

exports.register = require('../lib/utils').routePlugin(
  {
    name: 'api-users',
    version: '0.0.0',
    dependencies: ['bedwetter', 'dogwater']
  },
  [
    {
      method: 'GET',
      path: '/users/{id}',
      handler: { bedwetter: null }
    },
    {
      method: 'POST',
      path: '/users/{id}',
      handler: { bedwetter: null }
    },
    {
      method: 'GET',
      path: '/users',
      handler: { bedwetter: null }
    }
  ]
)
