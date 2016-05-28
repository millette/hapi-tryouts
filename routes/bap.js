'use strict'

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/test',
    handler: (request, reply) => {
      reply('test passed')
    }
  })

  next()
}

exports.register.attributes = {
  pkg: require('../package.json')
}
