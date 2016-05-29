'use strict'

exports.register = require('../lib/utils').routePlugin(
  'users',
  [
    {
      method: 'GET',
      path: '/users/{id}',
      handler: (request, reply) => request.collections.users.findOne(request.params.id)
        .then((user) => reply.view('user', { user }))
    },
    {
      method: 'GET',
      path: '/users',
      handler: (request, reply) => request.collections.users.find()
        .then((users) => reply.view('users', { users }))
    }
  ]
)
