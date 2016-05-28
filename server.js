'use strict'

const Glue = require('glue')

Glue.compose(require('./manifest.json'), { relativeTo: __dirname })
  .then((server) => {
    server.start()
    return server
  })
  .then((server) => {
    console.log('hapi days!', server.info.uri)
  })
  .catch((err) => {
    console.error('ERROR:', err)
  })
