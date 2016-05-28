'use strict'

const Glue = require('glue')

const manifest = require('./manifest.json')

Glue.compose(manifest, { relativeTo: __dirname })
  .then((server) => {
    server.start(() => {
      console.log('hapi days!')
    })
  })
  .catch((err) => {
    console.error('ERROR:', err)
  })
