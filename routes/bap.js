'use strict'

exports.register = require('../lib/utils').routePlugin(
  'bap',
  [
    {
      method: 'GET',
      path: '/test',
      handler: (request, reply) => reply('test passed')
    },
    {
      method: 'GET',
      path: '/templated',
      handler: {
        view: {
          template: 'le-tpl',
          context: { name: 'test passed' }
        }
      }
    },
    {
      method: 'GET',
      path: '/ya/{id}',
      handler: (request, reply) => request.collections.dogs.findOne(request.params.id)
        .then((user) => reply.view('le-tpl', { user: user.toObject(), and: request.collections.dogs.ohmy() }))
    },
    {
      method: 'GET',
      path: '/yab/{id}',
      handler: (request, reply) => reply(request.collections.dogs.findOne(request.params.id))
    },
    {
      method: 'GET',
      path: '/dogs',
      handler: {
        bedwetter: null
      }
    },
    {
      method: 'GET',
      path: '/dogs/{id}',
      handler: {
        bedwetter: null
      }
    }
  ]
)
