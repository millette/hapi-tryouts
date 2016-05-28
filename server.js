'use strict'

const Glue = require('glue')

Glue.compose(require('./manifest.json'))
  .then((server) => {
    server.route({
      method: 'GET',
      path: '/',
      handler: (request, reply) => {
        reply('Hello, world!')
      }
    })
    server.start()
    return server
  })
  .then((server) => {
    console.log('hapi days!', server.info.uri)
  })
  .catch((err) => {
    console.error('ERROR:', err)
  })
