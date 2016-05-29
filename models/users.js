'use strict'

module.exports = {
  identity: 'users',
  connection: 'memoryDB',
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true
    }
  }
}
