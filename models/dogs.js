'use strict'

module.exports = {
  identity: 'dogs',
  connection: 'memoryDB',
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    toJSON: function () {
      return this.name.toUpperCase()
    },
    flop: function () {
      return this.name.toUpperCase()
    }
  },
  ohmy: () => 'that is it!'
}
