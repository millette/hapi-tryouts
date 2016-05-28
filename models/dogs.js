'use strict'

module.exports = {
  identity: 'dogs',
  connection: 'memoryDB',
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    flop: function () {
      return this.name.toUpperCase()
    }
  },
  ohmy: () => 'that is it!'
}
