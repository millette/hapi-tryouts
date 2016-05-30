'use strict'

exports.register = require('../lib/utils').routePlugin(
  {
    name: 'users',
    version: '0.0.0',
    dependencies: ['vision', 'dogwater']
  },
  [
    {
      method: 'GET',
      path: '/users/{id}',
      handler: (request, reply) => request.collections.users.findOne(request.params.id)
        .then((user) => reply.view('user', { user }).etag(user.updatedAt))
    },
    {
      method: 'GET',
      path: '/users/{id}/edit',
      handler: (request, reply) => request.collections.users.findOne(request.params.id)
        .then((user) => reply.view('user-edit', { user }).etag(user.updatedAt))
    },
    {
      method: 'GET',
      path: '/users',
      handler: (request, reply) => request.collections.users.find()
        .then((users) => reply.view('users', { users }))
    }
  ]
)
