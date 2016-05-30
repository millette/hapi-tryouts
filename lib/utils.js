'use strict'

exports.routePlugin = (attributes, routes) => {
  const register = (server, options, next) => {
    routes.forEach((route) => server.route(route))
    next()
  }

  register.attributes = attributes
  return register
}
