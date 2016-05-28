'use strict'

exports.register = require('../lib/utils').routePlugin(
  require('path').basename(__filename, '.js'),
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
      path: '/dog/{id}',
      handler: (request, reply) => request.collections.dogs.findOne(request.params.id)
        .then((user) => reply.view('le-tpl', { user }))
    },
    {
      method: 'GET',
      path: '/dog-b/{id}',
      handler: (request, reply) => reply(request.collections.dogs.findOne(request.params.id))
    }
  ]
)
