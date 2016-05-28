'use strict'

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      reply('Hello, world!')
    }
  })

  next()
}

exports.register.attributes = { name: 'home' }
