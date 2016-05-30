'use strict'

exports.register = require('../lib/utils').routePlugin(
  'users',
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
