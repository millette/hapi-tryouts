'use strict'

const Glue = require('glue')

Glue.compose(require('./manifest.json'), { relativeTo: __dirname })
  .then((server) => {
    server.start()
    return server
  })
  .then((server) => {
    server.connections.forEach((connection) => {
      console.log('hapi days connections!', connection.info.uri)
    })
  })
  .catch((err) => {
    console.error('ERROR:', err)
  })
