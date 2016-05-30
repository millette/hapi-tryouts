'use strict'

exports.register = require('../lib/utils').routePlugin(
  'home',
  [{
    method: 'GET',
    path: '/',
    handler: (request, reply) => reply.view('home', { request: request, reply: reply })
  }]
)
