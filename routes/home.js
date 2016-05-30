'use strict'

exports.register = require('../lib/utils').routePlugin(
  {
    name: 'home',
    version: '0.0.0',
    dependencies: ['login', 'vision']
  },
  [{
    method: 'GET',
    path: '/',
    // handler: (request, reply) => reply.view('home', { request: request, reply: reply, profile: request.auth.credentials.profile })
    config: {
      auth: 'session',
      handler: (request, reply) => reply.view('home', { request: request, reply: reply, profile: request.auth.credentials.profile })
    }
  }]
)
